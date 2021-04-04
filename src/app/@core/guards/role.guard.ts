import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const routeRoles = next.data.roles;
    // const userRoles = [];
    // const hasRole =
    //   routeRoles &&
    //   userRoles &&
    //   routeRoles.some((routeRole) =>
    //     userRoles.some((userRole) => routeRole === userRole.name),
    //   );

    // if (hasRole) {
    //   return true;
    // }

    // this.router.navigate([`/${Path.NotFound}`]);
    // return false;
    return true;
  }
}
