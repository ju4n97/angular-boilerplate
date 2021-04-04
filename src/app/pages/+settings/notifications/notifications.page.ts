import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NOTIFICATIONS_SETTINGS_ROUTE } from './notifications.page.route';

@Component({
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [NotificationsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([NOTIFICATIONS_SETTINGS_ROUTE]),
  ],
})
export class NotificationsModule {}
