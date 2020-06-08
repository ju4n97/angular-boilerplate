import { ModelAdapter } from '@app/@core/interfaces';
import { User } from './user.model';

export class UserAdapter implements ModelAdapter<User> {
  adapt(item: any): User {
    return new User(
      item.id,
      item.username,
      item.password,
      item.name,
      item.lastname,
      item.token
    );
  }
  encode(item: User) {
    return {
      id: item.id,
      username: item.username,
      password: item.password,
      name: item.name,
      lastname: item.lastname,
      toke: item.token,
    };
  }
}
