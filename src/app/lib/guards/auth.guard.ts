import { inject } from '@angular/core';
import { CanLoadFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@lib/services';

/**
 * Creates a function that acts as an Angular route guard, allowing or blocking navigation based on the user's authentication status.
 *
 * @param options - An optional object that configures the behavior of the guard.
 * @param options.requiresAuthentication - An optional boolean that specifies whether the guard should allow or block navigation based on the user's authentication status. Defaults to `true`.
 *
 * @returns A function that acts as an Angular route guard.
 *
 * @example
 *
 * import { authGuard } from '@lib/guards';
 *
 * const routes: Routes = [
 *   {
 *     path: 'my-protected-component-path',
 *     loadComponent: async () => (await import('./path/to/my-protected-component')).MyProtectedComponent,
 *     canLoad: [authGuard()],
 *   },
 * ];
 *
 * @example
 *
 * import { authGuard } from '@lib/guards';
 *
 * const routes: Routes = [
 *   {
 *     path: 'my-path-component',
 *     loadComponent: async () => (await import('./path/to/my-auth-component')).MyAuthComponent,
 *     canLoad: [authGuard({ requiresAuthentication: false })],
 *   },
 * ];
 */
export const authGuard = (
  options: {
    requiresAuthentication?: boolean;
  } = { requiresAuthentication: true },
): CanLoadFn => {
  return (_: Route, segments: UrlSegment[]) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    const isAuthenticated = authService.isAuthenticated;

    if (options.requiresAuthentication === isAuthenticated) {
      return true;
    }

    return options.requiresAuthentication
      ? router.createUrlTree(['/auth/login'], {
          queryParams: { returnUrl: segments.map((s) => s.path).join('/') },
        })
      : router.createUrlTree(['/']);
  };
};
