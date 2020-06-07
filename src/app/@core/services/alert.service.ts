import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  showSuccess(message: string) {
    alert(`Success: ${message}`);
  }

  showInfo(message: string) {
    alert(`Info: ${message}`);
  }

  showWarning(message: string) {
    alert(`Warning: ${message}`);
  }

  showError(message: string) {
    alert(`Error: ${message}`);
  }
}
