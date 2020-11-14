import { UserDetail } from '.';
import { File } from '../file';
import { Role } from '../role';

export class User {
  id: string;
  username: string;
  password: string;
  passwordResetToken: string;
  passwordResetTokenExpires: Date;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  details: UserDetail;
  roles: Role[];
  files: File[];
}
