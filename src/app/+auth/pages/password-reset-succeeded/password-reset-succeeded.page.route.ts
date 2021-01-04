import { Route } from '@angular/router';
import { Path } from '@core/structs';
import { PasswordResetSucceededPage } from './password-reset-succeeded.page';

export const PASSWORD_RESET_SUCCEEDED_ROUTE: Route = {
  path: Path.PasswordResetSucceeded,
  component: PasswordResetSucceededPage,
  data: {
    title: 'Your password was restablished',
    robots: 'noindex, nofollow',
  },
};
