import { Route } from '@angular/router';
import { SignInPage } from './sign-in.page';

export const SIGN_IN_ROUTE: Route = {
  path: '',
  component: SignInPage,
  data: {
    title: 'Sign into Angular Boilerplate',
    description:
      'Start writing your business logic right away without any concern on architecture matters.',
    robots: 'index, follow',
  },
};
