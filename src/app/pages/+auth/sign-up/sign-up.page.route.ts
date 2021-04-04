import { Route } from '@angular/router';
import { SignUpPage } from './sign-up.page';

export const SIGN_UP_ROUTE: Route = {
  path: '',
  component: SignUpPage,
  data: {
    title: 'Join to Angular Boilerplate',
    description:
      'Start writing your business logic right away without any concern on architecture matters.',
    robots: 'index, follow',
  },
};
