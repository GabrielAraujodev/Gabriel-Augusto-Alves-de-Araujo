import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = this.el.nativeElement;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(root.querySelector('h1'), {
        y: 30,
        opacity: 0,
        duration: 0.7
      })
      .from(root.querySelector('p'), {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from(root.querySelectorAll('.contact-card'), {
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out'
      }, '-=0.3');
    }
  }
}
