import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@lib/services';

type AuthGuardOptions = {
    requiresAuthentication: boolean;
};

const defaultAuthGuardOptions = (): AuthGuardOptions => ({
    requiresAuthentication: true,
});

/**
 * Guard that allows or blocks the navigation based on the user's authentication status.
 *
 * @param options An optional object that configures the behavior of the guard.
 * @param options.requiresAuthentication An optional boolean that specifies whether the guard should allow or block navigation based on the user's authentication status.
 *
 * @returns A function that acts as an Angular route guard.
 *
 * @example
 * import { authGuard } from '@lib/guards';
 *
 * const routes: Routes = [
 *   {
 *     path: 'my-protected-component-path',
 *     loadComponent: async () => (await import('./path/to/my-protected-component')).MyProtectedComponent,
 *     canMatch: [authGuard()],
 *   },
 * ];
 *
 * @example
 * import { authGuard } from '@lib/guards';
 *
 * const routes: Routes = [
 *   {
 *     path: 'my-path-component',
 *     loadComponent: async () => (await import('./path/to/my-auth-component')).MyAuthComponent,
 *     canMatch: [authGuard({ requiresAuthentication: false })],
 *   },
 * ];
 */
export const authGuard = (options: AuthGuardOptions = defaultAuthGuardOptions()): CanMatchFn => {
    return (_: Route, segments: UrlSegment[]) => {
        const router = inject(Router);
        const authService = inject(AuthService);

        if (options.requiresAuthentication === authService.isAuthenticated) {
            return true;
        }

        return options.requiresAuthentication
            ? router.createUrlTree(['/auth/login'], {
                  queryParams: {
                      returnUrl: segments.map((s) => s.path).join('/'),
                  },
              })
            : router.createUrlTree(['/']);
    };
};
