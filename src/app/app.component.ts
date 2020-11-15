import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './+auth';
import { Path } from './@core/enums';
import { SeoService } from './@core/services';
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
    private authService: AuthService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn.asObservable();
  }

  ngOnInit(): void {
    this.seoService.init();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate([Path.Login]);
  }
}
