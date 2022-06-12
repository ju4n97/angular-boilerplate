import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@lib/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private _router: Router, private _authService: AuthService) {}

  canLoad(_: Route, segments: UrlSegment[]): boolean {
    const isLoggedIn = this._authService.isLoggedIn;
    if (isLoggedIn) {
      return true;
    }

    const callbackURL = segments.map((s) => s.path).join('/');
    this._router.navigate(['/auth/login'], { queryParams: { callbackURL } });
    return false;
  }
}
