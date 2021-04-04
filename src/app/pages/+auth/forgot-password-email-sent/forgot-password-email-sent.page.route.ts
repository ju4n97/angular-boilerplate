import { Route } from '@angular/router';
import { ForgotPasswordEmailSentPage } from './forgot-password-email-sent.page';

export const FORGOT_PASSWORD_EMAIL_SENT_ROUTE: Route = {
  path: '',
  component: ForgotPasswordEmailSentPage,
  data: {
    title: 'We have sent you an email with instructions',
    robots: 'noindex, nofollow',
  },
};
