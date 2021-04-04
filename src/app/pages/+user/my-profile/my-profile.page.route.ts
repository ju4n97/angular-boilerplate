import { Route } from '@angular/router';
import { MyProfilePage } from './my-profile.page';

export const MY_PROFILE_ROUTE: Route = {
  path: '',
  component: MyProfilePage,
  data: {
    title: 'My profile',
    robots: 'noindex, nofollow',
  },
};
