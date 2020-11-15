import { User } from '@core/shared/user';
import { Token } from '.';

export interface SignInResult {
  user: User;
  token: Token;
}
