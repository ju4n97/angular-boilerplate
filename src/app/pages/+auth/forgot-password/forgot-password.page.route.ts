import { Route } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password.page';

export const FORGOT_PASSWORD_ROUTE: Route = {
  path: '',
  component: ForgotPasswordPage,
  data: {
    title: 'Did you forget your password?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt?',
    robots: 'index, follow',
  },
};
