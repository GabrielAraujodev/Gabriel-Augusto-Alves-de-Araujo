import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

interface Vertex {
  x: number;
  y: number;
  restX: number;
  restY: number;
  vx: number;
  vy: number;
  offsetZ: number;
  velZ: number;
  col: number;
  row: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('meshCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('heroContainer', { static: false }) heroContainerRef!: ElementRef<HTMLElement>;

  private animationFrameId: number | null = null;
  private resizeListener: (() => void) | null = null;

  // Grid Configuration
  private readonly COLS = 50;
  private readonly ROWS = 30;
  private readonly SPRING = 0.025;
  private readonly DAMPING = 0.93;
  private readonly SPREAD = 0.18;

  // Physics state
  private vertices: Vertex[] = [];
  private mouseX = -9999;
  private mouseY = -9999;
  private isPressing = false;
  private isMouseInside = false;
  private time = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initCanvasAndMesh();
    this.initEntranceAnimations();
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.animationFrameId !== null) {
        cancelAnimationFrame(this.animationFrameId);
      }
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
      }
    }
  }

  // Mouse Interactions
  onMouseMove(event: MouseEvent): void {
    const container = this.heroContainerRef?.nativeElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
    this.isMouseInside = true;
  }

  onMouseLeave(): void {
    this.mouseX = -9999;
    this.mouseY = -9999;
    this.isMouseInside = false;
    this.isPressing = false;
  }

  onMouseDown(): void {
    this.isPressing = true;
  }

  onMouseUp(): void {
    this.isPressing = false;
  }

  private initEntranceAnimations(): void {
    const root = this.el.nativeElement;
    const canvas = this.canvasRef?.nativeElement;

    // 1. Canvas fade-in
    if (canvas) {
      gsap.to(canvas, {
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut'
      });
    }

    // 2. Staggered reveal for content
    const revealElements = root.querySelectorAll('[data-reveal]');
    if (revealElements.length > 0) {
      gsap.from(revealElements, {
        opacity: 0,
        y: 30,
        scale: 0.94,
        filter: 'blur(6px)',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.13,
        delay: 0.5
      });
    }
  }

  private initCanvasAndMesh(): void {
    const canvas = this.canvasRef?.nativeElement;
    const container = this.heroContainerRef?.nativeElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setupDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.createGrid(width, height);
    };

    setupDimensions();

    this.resizeListener = () => setupDimensions();
    window.addEventListener('resize', this.resizeListener);

    // Start physics animation loop
    const animate = () => {
      this.time += 0.016;
      this.updatePhysics();
      this.renderMesh(ctx, container.clientWidth, container.clientHeight);
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  private createGrid(width: number, height: number): void {
    this.vertices = [];

    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        const restX = (c / (this.COLS - 1)) * width;
        const restY = (r / (this.ROWS - 1)) * height;

        this.vertices.push({
          x: restX,
          y: restY,
          restX,
          restY,
          vx: 0,
          vy: 0,
          offsetZ: 0,
          velZ: 0,
          col: c,
          row: r
        });
      }
    }
  }

  private updatePhysics(): void {
    const radius = this.isPressing ? 200 : 130;
    const forceStrength = this.isPressing ? 30 : 15;

    // 1. Cursor interaction, breathing, spring return, damping
    for (let i = 0; i < this.vertices.length; i++) {
      const v = this.vertices[i];

      // Ambient breathing
      const breathe = Math.sin(this.time * 0.6 + v.col * 0.15 + v.row * 0.12) * 2;
      v.velZ += (breathe - v.offsetZ) * 0.002;

      // Cursor force
      if (this.isMouseInside && this.mouseX > -1000) {
        const dx = v.x - this.mouseX;
        const dy = v.y - this.mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < radius && dist > 0) {
          const force = (1 - dist / radius) * forceStrength;
          v.velZ += force * 0.4;
          v.vx += (dx / dist) * force * 0.12;
          v.vy += (dy / dist) * force * 0.12;
        }
      }

      // Spring return to rest position
      v.vx += (v.restX - v.x) * this.SPRING;
      v.vy += (v.restY - v.y) * this.SPRING;
      v.velZ -= v.offsetZ * this.SPRING * 1.5;

      // Damping
      v.vx *= this.DAMPING;
      v.vy *= this.DAMPING;
      v.velZ *= this.DAMPING;
    }

    // 2. Wave Propagation between 4 direct neighbors
    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        const idx = r * this.COLS + c;
        const v = this.vertices[idx];

        let neighborDiff = 0;

        // Up
        if (r > 0) {
          neighborDiff += this.vertices[(r - 1) * this.COLS + c].offsetZ - v.offsetZ;
        }
        // Down
        if (r < this.ROWS - 1) {
          neighborDiff += this.vertices[(r + 1) * this.COLS + c].offsetZ - v.offsetZ;
        }
        // Left
        if (c > 0) {
          neighborDiff += this.vertices[r * this.COLS + (c - 1)].offsetZ - v.offsetZ;
        }
        // Right
        if (c < this.COLS - 1) {
          neighborDiff += this.vertices[r * this.COLS + (c + 1)].offsetZ - v.offsetZ;
        }

        v.velZ += neighborDiff * this.SPREAD;
      }
    }

    // 3. Integrate positions
    for (let i = 0; i < this.vertices.length; i++) {
      const v = this.vertices[i];
      v.x += v.vx;
      v.y += v.vy;
      v.offsetZ += v.velZ;
    }
  }

  private renderMesh(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const maxDist = Math.hypot(cx, cy);
    const zoneW = width * 0.35;
    const zoneH = height * 0.35;

    // 1. Draw connecting mesh lines
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
    ctx.lineWidth = 0.5;

    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        const idx = r * this.COLS + c;
        const v = this.vertices[idx];
        const screenY = v.y - v.offsetZ * 0.3;

        // Horizontal line to right neighbor
        if (c < this.COLS - 1) {
          const nextV = this.vertices[idx + 1];
          const nextScreenY = nextV.y - nextV.offsetZ * 0.3;
          ctx.moveTo(v.x, screenY);
          ctx.lineTo(nextV.x, nextScreenY);
        }

        // Vertical line to bottom neighbor
        if (r < this.ROWS - 1) {
          const bottomV = this.vertices[idx + this.COLS];
          const bottomScreenY = bottomV.y - bottomV.offsetZ * 0.3;
          ctx.moveTo(v.x, screenY);
          ctx.lineTo(bottomV.x, bottomScreenY);
        }
      }
    }
    ctx.stroke();

    // 2. Draw vertices
    for (let i = 0; i < this.vertices.length; i++) {
      const v = this.vertices[i];
      const screenY = v.y - v.offsetZ * 0.3;

      const distFromCenter = Math.hypot(v.restX - cx, v.restY - cy);
      const centerFactor = Math.pow(Math.max(0, 1 - Math.min(1, (distFromCenter / maxDist) * 1.4)), 1.5);

      const dxDispl = v.x - v.restX;
      const dyDispl = v.y - v.restY;
      const displacement = Math.sqrt(dxDispl * dxDispl + dyDispl * dyDispl + v.offsetZ * v.offsetZ);

      // Interpolate colors
      let r = 130 + (245 - 130) * centerFactor;
      let g = 130 + (235 - 130) * centerFactor;
      let b = 140 + (210 - 140) * centerFactor;

      if (displacement > 3) {
        const blend = Math.min(1, (displacement - 3) * 0.15);
        r += (255 - r) * blend;
        g += (252 - g) * blend;
        b += (245 - b) * blend;
      }

      // Size calculation
      const size = 1 + centerFactor * 1 + (displacement > 0.5 ? displacement * 0.05 : 0);

      // Alpha calculation
      const baseAlpha = 0.06 + centerFactor * 0.18;
      const activeAlpha = displacement > 0.5 ? Math.min(0.9, displacement * 0.05) : 0;
      let alpha = Math.max(baseAlpha, activeAlpha);

      // Content zone dimming when cursor is inside
      if (this.isMouseInside) {
        const ellipseDist = Math.pow((v.restX - cx) / zoneW, 2) + Math.pow((v.restY - cy) / zoneH, 2);
        if (ellipseDist < 1) {
          const dim = (1 - ellipseDist) * 0.7;
          alpha *= (1 - dim);
        }
      }

      // Vertex Glow
      if (displacement > 1.5 || centerFactor > 0.4) {
        ctx.beginPath();
        ctx.arc(v.x, screenY, size + 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha * 0.15})`;
        ctx.fill();
      }

      // Core vertex dot
      ctx.beginPath();
      ctx.arc(v.x, screenY, Math.max(0.6, size), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
      ctx.fill();
    }
  }
}
