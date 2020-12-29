import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { ForgotPasswordEmailSentPage } from './forgot-password-email-sent.page';

export const FORGOT_PASSWORD_EMAIL_SENT_ROUTE: Route = {
  path: Path.ForgotPassword,
  component: ForgotPasswordEmailSentPage,
  data: {
    title: 'We have sent you an email with instructions',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt?',
    robots: 'noindex, nofollow',
  },
};
