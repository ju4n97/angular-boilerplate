import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockedUsersPage } from './blocked-users.page';

@NgModule({
  declarations: [BlockedUsersPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlockedUsersPage,
        data: {
          title: 'Blocked users settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class BlockedUsersModule {}
