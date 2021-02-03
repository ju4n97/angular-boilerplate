import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());

  constructor() {}

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  signIn(): void {
    const token = Array(4)
      .fill(0)
      .map((_) => Math.random() * 99)
      .join('-');
    this.storeToken(token);
    this.isLoggedIn$.next(true);
  }

  signOut(): void {
    this.removeToken();
    this.isLoggedIn$.next(false);
  }

  private getToken(): string {
    return localStorage.getItem('token');
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }
}
