import { Injectable } from '@angular/core';
import { storage } from '@lib/utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem('App/session'));

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  signIn(): void {
    storage.setItem('App/session', {
      user: 'some-user',
      token: 'abc',
    });
    this.isLoggedIn$.next(true);
  }

  signOut(): void {
    storage.removeItem('App/session');
    this.isLoggedIn$.next(false);
  }
}
