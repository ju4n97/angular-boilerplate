import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AlertService, ErrorService, LoggingService } from '../services';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    const errorService = this.injector.get(ErrorService);
    const loggingService = this.injector.get(LoggingService);
    const alertService = this.injector.get(AlertService);

    let message: string;
    let stackTrace: string;

    if (error instanceof HttpErrorResponse) {
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
      alertService.showError(message);
    } else {
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      alertService.showError(message);
    }

    console.error(error);
    loggingService.logError(message, stackTrace);
  }
}
