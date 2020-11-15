import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@app/+auth';
import { Observable } from 'rxjs';
import { Path } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn.value;

    if (isLoggedIn) {
      return true;
    }

    // if not logged in redirects to login page with the return url
    this.router.navigate([`/${Path.Login}`], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }
}
