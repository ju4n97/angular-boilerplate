import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './+auth/services/auth.service';
import { SeoService } from './@core/services/seo';
import { ThemeService } from './@core/services/theme';
import { Path } from './@core/structs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private seoService: SeoService,
    private themeService: ThemeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.seoService.init();
    this.themeService.init();
  }

  onLogout() {
    this.authService.signOut();
    this.router.navigate([`/${Path.SignIn}`]);
  }
}
