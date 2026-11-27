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

  curriculum = './assets/Gabriel_Araújo_Currículo_TI.pdf';
  code = './assets/profile-photo.png';
  java = './assets/Java.jpg';
  angular = './assets/AngularJS.jpg';
  cloud = './assets/Cloud.jpg';
  ionic = './assets/Ionic.jpg';
  javascript = './assets/JavaScript.jpg';
  sql = './assets/SQL.jpg';
  saas = './assets/Sass.jpg';
  html = './assets/Html5.jpg';
  fire = './assets/Firebase.jpg';
  python = './assets/python.png';
  bi = './assets/power-bi.png';

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = this.el.nativeElement;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(root.querySelector('.intro-text'), {
        y: 30,
        opacity: 0,
        duration: 0.8
      })
      .from(root.querySelector('.intro-image'), {
        scale: 0.95,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(root.querySelectorAll('.edu-card'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
      }, '-=0.3')
      .from(root.querySelectorAll('.timeline-item'), {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12
      }, '-=0.2')
      .from(root.querySelectorAll('.cert-item'), {
        y: 15,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08
      }, '-=0.2')
      .from(root.querySelectorAll('.skill-item'), {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.03
      }, '-=0.2');
    }
  }
}
