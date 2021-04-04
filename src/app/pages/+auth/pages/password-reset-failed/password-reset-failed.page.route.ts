import { Route } from '@angular/router';
import { Path } from '@core/structs';
import { PasswordResetFailedPage } from './password-reset-failed.page';

export const PASSWORD_RESET_FAILED_ROUTE: Route = {
  path: Path.PasswordResetFailed,
  component: PasswordResetFailedPage,
  data: {
    title: 'Password reset failed',
    robots: 'noindex, nofollow',
  },
};
