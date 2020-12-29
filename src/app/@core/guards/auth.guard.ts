import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Path } from '@core/structs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = true;

    if (isLoggedIn) {
      return true;
    }

    // if not logged in redirects to sign-in page with the return url
    this.router.navigate([`/${Path.SignIn}`], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }
}
