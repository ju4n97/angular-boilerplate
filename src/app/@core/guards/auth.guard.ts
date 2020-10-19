import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@app/features/_auth';
import { Observable } from 'rxjs';
import { PathMap } from '../enums';

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
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([`/${PathMap.Login}`], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }
}
