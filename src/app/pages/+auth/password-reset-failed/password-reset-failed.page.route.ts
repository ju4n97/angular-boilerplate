import { Route } from '@angular/router';
import { PasswordResetFailedPage } from './password-reset-failed.page';

export const PASSWORD_RESET_FAILED_ROUTE: Route = {
  path: '',
  component: PasswordResetFailedPage,
  data: {
    title: 'Password reset failed',
    robots: 'noindex, nofollow',
  },
};
