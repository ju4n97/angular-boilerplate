import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/pages/+auth/_services/auth.service';
import { SeoService } from '@core/services/seo';
import { ThemeService } from '@core/services/theme';
import { Path } from '@core/structs';
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
    this.seoService.init();
    this.themeService.init();
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  onLogout(): void {
    this.authService.signOut();
    this.router.navigate([`/${Path.SignIn}`]);
  }
}
