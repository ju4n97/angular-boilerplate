import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpService } from '@app/@core/services';
import { environment } from '@environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends GenericHttpService<User> {
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apiUrl, 'users');
  }
}
