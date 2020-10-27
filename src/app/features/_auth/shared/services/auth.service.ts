import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpService } from '@core/services';
import { User } from '@core/shared/user';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginResult, Token } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends GenericHttpService<User | LoginResult> {
  private readonly USER_ITEM = '_user';
  private readonly TOKEN_ITEM = '_token';

  private userSubject = new BehaviorSubject<User>(this._getUser());
  private tokenSubject = new BehaviorSubject<Token>(this._getToken());

  isLoggedIn = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apiUrl, 'auth');
  }

  get userValue(): User {
    return this.userSubject?.value;
  }

  get tokenValue(): Token {
    return this.tokenSubject?.value;
  }

  private get loggedIn(): boolean {
    const user = this.userSubject?.value;
    const token = this.tokenSubject?.value;
    return !!(user && token);
  }

  login({ username, password }: User): Observable<LoginResult> {
    return super.post({ username, password }, 'login').pipe(
      map((result: LoginResult) => {
        const { user, token } = result;
        this._saveUser(user);
        this._saveToken(token);
        this.isLoggedIn.next(true);
        return result;
      })
    );
  }

  register(user: User): Observable<User> {
    return super.post(user, 'register') as Observable<User>;
  }

  beginPasswordReset(email: string) {
    return super.post({ email }, 'begin-password-reset');
  }

  resetPassword(username: string, password: string, token: string) {
    // return super.post({ username, password, token }, 'reset-password');
  }

  logout() {
    localStorage.removeItem(this.USER_ITEM);
    localStorage.removeItem(this.TOKEN_ITEM);
    this.userSubject.next(null);
    this.tokenSubject.next(null);
    this.isLoggedIn.next(false);
  }

  private _getUser(): User {
    return JSON.parse(localStorage.getItem(this.USER_ITEM)) as User;
  }

  private _getToken(): Token {
    return JSON.parse(localStorage.getItem(this.TOKEN_ITEM)) as Token;
  }

  private _saveUser(user: User): void {
    localStorage.setItem(this.USER_ITEM, JSON.stringify(user));
    this.userSubject.next(user);
  }

  private _saveToken(token: Token): void {
    localStorage.setItem(this.TOKEN_ITEM, JSON.stringify(token));
    this.tokenSubject.next(token);
  }
}
