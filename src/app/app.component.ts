import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portifolio';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'email',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg')
    );
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.activatedRoute.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        const description = currentRoute.snapshot.data?.['description'];
        if (description) {
          this.meta.updateTag({ name: 'description', content: description });
          this.meta.updateTag({ property: 'og:description', content: description });
          this.meta.updateTag({ name: 'twitter:description', content: description });
        }
      });
  }
}
