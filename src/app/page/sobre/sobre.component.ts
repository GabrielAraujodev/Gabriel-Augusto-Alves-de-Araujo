import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngOnInit() {}

  curriculum = '/assets/Gabriel_Araújo_Currículo_TI.pdf';
  code = '/assets/profile-photo.png';
  java = '/assets/Java.jpg';
  angular = '/assets/AngularJS.jpg';
  cloud = '/assets/Cloud.jpg';
  ionic = '/assets/Ionic.jpg';
  javascript = '/assets/JavaScript.jpg';
  sql = '/assets/SQL.jpg';
  saas = '/assets/Sass.jpg';
  html = '/assets/Html5.jpg';
  fire = '/assets/Firebase.jpg';
  python = '/assets/python.png';
  bi = '/assets/power-bi.png';

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          return;
        }

        const root = this.el.nativeElement;
        const introText = root.querySelector('.intro-text');
        const introImage = root.querySelector('.intro-image');
        const eduCards = root.querySelectorAll('.edu-card');
        const timelineItems = root.querySelectorAll('.timeline-item');
        const certItems = root.querySelectorAll('.cert-item');
        const skillItems = root.querySelectorAll('.skill-item');

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (introText) {
          tl.from(introText, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            clearProps: 'opacity,transform'
          });
        }

        if (introImage) {
          tl.from(introImage, {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            clearProps: 'opacity,transform'
          }, '-=0.5');
        }

        if (eduCards && eduCards.length > 0) {
          tl.from(eduCards, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            clearProps: 'opacity,transform'
          }, '-=0.3');
        }

        if (timelineItems && timelineItems.length > 0) {
          tl.from(timelineItems, {
            x: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            clearProps: 'opacity,transform'
          }, '-=0.2');
        }

        if (certItems && certItems.length > 0) {
          tl.from(certItems, {
            y: 15,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            clearProps: 'opacity,transform'
          }, '-=0.2');
        }

        if (skillItems && skillItems.length > 0) {
          tl.from(skillItems, {
            y: 15,
            opacity: 0,
            duration: 0.4,
            stagger: 0.03,
            clearProps: 'opacity,transform'
          }, '-=0.2');
        }
      } catch (err) {
        console.warn('GSAP animation skipped:', err);
      }
    }
  }
}
