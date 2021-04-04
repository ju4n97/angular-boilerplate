import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '@core/services/seo';
import { ThemeService } from '@core/services/theme';
import { Path } from '@core/structs';
import { AuthService } from '@pages/+auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private router: Router,
    private seoService: SeoService,
    private themeService: ThemeService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.seoService.init();
    this.themeService.init();
  }

  onLogout(): void {
    this.authService.signOut();
    this.router.navigate([`/${Path.SignIn}`]);
  }
}
