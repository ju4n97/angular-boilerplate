import { Injectable } from '@angular/core';
import { storage } from '@lib/utils/storage/storage.utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(!!storage.getItem('App/session'));

  get isAuthenticated(): boolean {
    return this.isAuthenticated$.getValue();
  }

  login(): void {
    storage.setItem('App/session', { user: 'some-user-id', token: 'abc' });
    this.isAuthenticated$.next(true);
  }

  logout(): void {
    storage.removeItem('App/session');
    this.isAuthenticated$.next(false);
  }
}
