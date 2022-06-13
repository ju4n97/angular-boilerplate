import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanLoad {
  constructor(private _router: Router, private _authService: AuthService) {}

  canLoad(): boolean {
    const isLoggedIn = this._authService.isLoggedIn;
    if (isLoggedIn) {
      this._router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
