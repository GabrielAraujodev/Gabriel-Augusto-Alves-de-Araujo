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

  image = './assets/github.jpg';
  image1 = './assets/gmail.jpg';
  image2 = './assets/linkedin.jpg';
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
        x: -30,
        opacity: 0,
        duration: 0.8
      })
      .from(root.querySelector('.intro-image'), {
        x: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from(root.querySelectorAll('.skill-item'), {
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: 'power2.out'
      }, '-=0.3');
    }
  }
}
