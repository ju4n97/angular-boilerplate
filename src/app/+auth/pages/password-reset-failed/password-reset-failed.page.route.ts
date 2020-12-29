import { Route } from '@angular/router';
import { Path } from '@app/@core/enums';
import { PasswordResetFailedPage } from './password-reset-failed.page';

export const PASSWORD_RESET_FAILED_ROUTE: Route = {
  path: Path.PasswordResetFailed,
  component: PasswordResetFailedPage,
  data: {
    title: 'Password reset failed',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt?',
    robots: 'noindex, nofollow',
  },
};
