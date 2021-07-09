import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '@app/pages/auth/services/auth.service';
import { ROUTER_UTILS } from '../utils/router.utils';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(): boolean {
    const isLoggedIn = this.authService.isLoggedIn;

    if (isLoggedIn) {
      this.router.navigate([ROUTER_UTILS.config.base.home]);
      return false;
    }

    return true;
  }
}
