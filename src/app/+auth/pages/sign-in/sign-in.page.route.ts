import { Route } from '@angular/router';
import { Path } from '@app/@core/enums';
import { SignInPage } from './sign-in.page';

export const SIGN_IN_ROUTE: Route = {
  path: Path.SignIn,
  component: SignInPage,
  data: {
    title: 'Sign into Angular Boilerplate',
    description:
      'Start writing your business logic without any concern on architecture matters.',
    robots: 'index, follow',
  },
};
