import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyProfilePage } from './my-profile.page';

@NgModule({
  declarations: [MyProfilePage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyProfilePage,
        data: {
          title: 'My profile',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class MyProfileModule {}
