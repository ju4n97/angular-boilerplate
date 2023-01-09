import { TestBed } from '@angular/core/testing';
import { CanLoadFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@lib/services';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let authService: AuthService;
  let router: Router;
  let canLoad: CanLoadFn;

  beforeEach(() => {
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    canLoad = authGuard();
  });

  it('should allow navigation to proceed when requiresAuthentication is true and the user is logged in', () => {
    authService.isAuthenticated$.next(true);
    expect(canLoad({} as Route, [] as UrlSegment[])).toBe(true);
  });

  it(`should block navigation and redirect to '/auth/login' when requiresAuthentication is true and the user is not logged in`, () => {
    authService.isAuthenticated$.next(false);
    expect(canLoad({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['/auth/login']));
  });

  it(`should block navigation and redirect to '/' when requiresAuthentication is false and the user is logged in`, () => {
    authService.isAuthenticated$.next(true);
    canLoad = authGuard({ requiresAuthentication: false });
    expect(canLoad({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['/']));
  });

  it('should allow navigation to proceed when requiresAuthentication is false and the user is not logged in', () => {
    authService.isAuthenticated$.next(false);
    canLoad = authGuard({ requiresAuthentication: false });
    expect(canLoad({} as Route, [] as UrlSegment[])).toBe(true);
  });
});
