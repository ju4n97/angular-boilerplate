import { TestBed } from '@angular/core/testing';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@lib/services';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
    let authService: AuthService;
    let router: Router;
    let canMatch: CanMatchFn;

    beforeEach(() => {
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);
        canMatch = authGuard();
    });

    it('should allow navigation to proceed when requiresAuthentication is true and the user is logged in', () => {
        authService.session.set({
            token: 'abc',
            user: {
                username: 'johnwick2097',
                email: 'johnwick@mail.com',
                role: 'admin',
            },
        });

        expect(canMatch({} as Route, [] as UrlSegment[])).toBe(true);
    });

    it(`should block navigation and redirect to '/auth/login' when requiresAuthentication is true and the user is not logged in`, () => {
        authService.session.set(null);

        expect(canMatch({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['/auth/login']));
    });

    it(`should block navigation and redirect to '/' when requiresAuthentication is false and the user is logged in`, () => {
        authService.session.set({
            token: 'abc',
            user: {
                username: 'johnwick2097',
                email: 'johnwick@mail.com',
                role: 'admin',
            },
        });

        canMatch = authGuard({ requiresAuthentication: false });

        expect(canMatch({} as Route, [] as UrlSegment[])).toEqual(router.createUrlTree(['/']));
    });

    it('should allow navigation to proceed when requiresAuthentication is false and the user is not logged in', () => {
        authService.session.set(null);

        canMatch = authGuard({ requiresAuthentication: false });

        expect(canMatch({} as Route, [] as UrlSegment[])).toBe(true);
    });
});
