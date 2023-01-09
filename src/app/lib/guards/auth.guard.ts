import { inject } from '@angular/core';
import { CanLoadFn, Router } from '@angular/router';
import { AuthService } from '@lib/services';

/**
 * Creates a function that acts as an Angular route guard, allowing or blocking navigation based on the user's authentication status.
 *
 * @param options - An optional object that configures the behavior of the guard.
 * @param options.redirectTo - An optional array of route segments to navigate to if the guard blocks navigation. Defaults to '/auth/login' if `requiresAuthentication` is `true`, and '/' if `requiresAuthentication` is `false`.
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
 *
 * @example
 *
 * import { authGuard } from '@lib/guards';
 *
 * const routes: Routes = [
 *   {
 *     path: 'my-custom-component',
 *     loadComponent: async () => (await import('./path/to/my-custom-component')).MyCustomComponent,
 *     canLoad: [authGuard({ redirectTo: ['/custom', 'redirect'] })],
 *   },
 * ];
 */
export const authGuard = (
  options: {
    redirectTo?: string[];
    requiresAuthentication?: boolean;
  } = { requiresAuthentication: true },
): CanLoadFn => {
  return () => {
    const router = inject(Router);
    const authService = inject(AuthService);

    const isLoggedIn = authService.isLoggedIn;
    const redirectTo = options.redirectTo ?? (options.requiresAuthentication ? '/auth/login' : '/');

    if (options.requiresAuthentication === isLoggedIn) {
      return true;
    }

    return router.createUrlTree([redirectTo]);
  };
};
