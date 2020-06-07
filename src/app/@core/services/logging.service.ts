import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logError(message: string, stackTrace: string) {
    // The console log should be replaced by your logging backend
    console.log(
      'Logging service:',
      `\nMessage: ${message}`,
      `\nStack: ${stackTrace}`
    );
  }
}
