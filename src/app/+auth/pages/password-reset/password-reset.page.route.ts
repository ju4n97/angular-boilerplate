import { Route } from '@angular/router';
import { Path } from '../structs';
import { PasswordResetPage } from './password-reset.page';

export const PASSWORD_RESET_ROUTE: Route = {
  path: Path.PasswordReset,
  component: PasswordResetPage,
  data: {
    title: 'Enter your new password',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt?',
    robots: 'noindex, nofollow',
  },
};
