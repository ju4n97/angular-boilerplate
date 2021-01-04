import { Route } from '@angular/router';
import { Path } from '@core/structs';
import { PasswordResetPage } from './password-reset.page';

export const PASSWORD_RESET_ROUTE: Route = {
  path: Path.PasswordReset,
  component: PasswordResetPage,
  data: {
    title: 'Enter your new password',
    robots: 'noindex, nofollow',
  },
};
