import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());

  constructor() { }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  signIn(): void {
    this.storeToken();
    this.isLoggedIn$.next(true);
  }

  signOut(): void {
    this.removeToken();
    this.isLoggedIn$.next(false);
  }

  private getToken(): string {
    return localStorage.getItem('token');
  }

  private storeToken(): void {
    const token = 'ABC';
    localStorage.setItem('token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }
}
