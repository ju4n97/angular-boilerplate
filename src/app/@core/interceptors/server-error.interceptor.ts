import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/+auth';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Path } from '../enums';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if ([401, 403].includes(error.status)) {
          this.authService.logout();
          this.router.navigateByUrl(Path.SignIn);
          return throwError(error);
        } else if (error.status === 500) {
          this.router.navigateByUrl('/internal-server-error');
        } else {
          return throwError(error);
        }
      })
    );
  }
}
