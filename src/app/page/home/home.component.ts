import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = this.el.nativeElement;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(root.querySelector('h1'), {
        y: 40,
        opacity: 0,
        duration: 0.9
      })
      .from(root.querySelector('h2'), {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.5')
      .from(root.querySelector('.hero-description'), {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from(root.querySelectorAll('.hero-actions a'), {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12
      }, '-=0.3')
      .from(root.querySelectorAll('.social-links a'), {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08
      }, '-=0.2');
    }
  }
}
