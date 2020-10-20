import { Route } from '@angular/router';
import { Path } from '@app/@core/enums';
import { LoginPage } from './login.page';

export const LOGIN_ROUTE: Route = {
  path: Path.Login,
  component: LoginPage,
  data: {
    title: 'Login on Angular Boilerplate',
    description:
      'Start writing your business logic without any concern on architecture matters.',
    robots: 'index, follow',
  },
};
