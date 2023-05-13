import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@lib/services';

/**
 * Interceptor that adds an Authorization header to requests that are authenticated and target the API URL.
 *
 * @param request The request object.
 * @param next The next interceptor in the chain.
 *
 * @returns The next Observable.
 */
export const jwtInterceptor: HttpInterceptorFn = (request, next) => {
    const authService = inject(AuthService);

    const isRequestAuthorized = authService.isAuthenticated && request.url.startsWith(environment.apiUrl);

    if (isRequestAuthorized) {
        const clonedRequest = request.clone({
            setHeaders: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Authorization: `Bearer ${'JWT TOKEN'}`,
            },
        });

        return next(clonedRequest);
    }

    return next(request);
};
