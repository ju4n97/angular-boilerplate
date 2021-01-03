import { Route } from '@angular/router';
import { Path } from '@app/@core/structs';
import { MyProfilePage } from './my-profile.page';

export const MY_PROFILE_ROUTE: Route = {
  path: Path.UserProfile,
  component: MyProfilePage,
  data: {
    title: 'My profile',
    robots: 'noindex, nofollow',
  },
};
