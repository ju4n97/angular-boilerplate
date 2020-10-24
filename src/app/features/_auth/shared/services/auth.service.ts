import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpService } from '@app/@core/services';
import { User } from '@app/@core/shared/user';
import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends GenericHttpService<Partial<User>> {
  private currentUserSubject: BehaviorSubject<User>;
  private readonly USER_ITEM = 'currentUser';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apiUrl, 'auth');

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.USER_ITEM))
    );
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login({ username, password }: User) {
    return super.post({ username, password }, 'login').pipe(
      map((user) => {
        // Store user details and jwt token in local storage
        localStorage.setItem(this.USER_ITEM, JSON.stringify(user));
        this.currentUserSubject.next(user as User);
        return user;
      })
    );
  }

  register(user: User) {
    return super.post(user, 'register');
  }

  beginPasswordReset(email: string) {
    return super.post({ email }, 'begin-password-reset');
  }

  resetPassword(username: string, password: string, token: string) {
    // return super.post({ username, password, token }, 'reset-password');
  }

  logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
