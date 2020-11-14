import { User } from '@core/shared/user';
import { Token } from '.';

export interface LoginResult {
  user: User;
  token: Token;
}
