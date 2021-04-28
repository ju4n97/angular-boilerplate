import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsPage } from './notifications.page';

@NgModule({
  declarations: [NotificationsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotificationsPage,
        data: {
          title: 'Notifications settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class NotificationsModule {}
