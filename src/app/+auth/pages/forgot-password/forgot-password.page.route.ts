import { Route } from '@angular/router';
import { Path } from '@core/structs';
import { ForgotPasswordPage } from './forgot-password.page';

export const FORGOT_PASSWORD_ROUTE: Route = {
  path: Path.ForgotPassword,
  component: ForgotPasswordPage,
  data: {
    title: 'Did you forget your password?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt?',
    robots: 'index, follow',
  },
};
