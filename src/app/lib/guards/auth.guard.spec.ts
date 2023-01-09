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
    authService.isLoggedIn$.next(true);
    expect(canLoad({} as Route, [] as UrlSegment[])).toBe(true);
  });

  it(`should block navigation and redirect to '/auth/login' when requiresAuthentication is true and the user is not logged in`, () => {
    authService.isLoggedIn$.next(false);
    expect(canLoad({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['/auth/login']));
  });

  it(`should block navigation and redirect to '/' when requiresAuthentication is false and the user is logged in`, () => {
    authService.isLoggedIn$.next(true);
    canLoad = authGuard({ requiresAuthentication: false });
    expect(canLoad({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['/']));
  });

  it('should allow navigation to proceed when requiresAuthentication is false and the user is not logged in', () => {
    authService.isLoggedIn$.next(false);
    canLoad = authGuard({ requiresAuthentication: false });
    expect(canLoad({} as Route, [] as UrlSegment[])).toBe(true);
  });

  it('should block navigation and redirect to the specified route when the redirectTo option is specified and the user is not logged in', () => {
    authService.isLoggedIn$.next(false);
    canLoad = authGuard({ requiresAuthentication: true, redirectTo: ['custom', 'redirect'] });
    expect(canLoad({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['custom', 'redirect']));
  });

  it('should allow navigation to proceed when the redirectTo option is specified and the user is logged in', () => {
    authService.isLoggedIn$.next(true);
    canLoad = authGuard({ requiresAuthentication: true, redirectTo: ['custom', 'redirect'] });
    expect(canLoad({} as Route, [] as UrlSegment[])).toBe(true);
  });
});
