import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BLOCKED_USERS_SETTINGS_ROUTE } from './blocked-users.page.route';

@Component({
  templateUrl: './blocked-users.page.html',
  styleUrls: ['./blocked-users.page.scss'],
})
export class BlockedUsersPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [BlockedUsersPage],
  imports: [
    CommonModule,
    RouterModule.forChild([BLOCKED_USERS_SETTINGS_ROUTE]),
  ],
})
export class BlockedUsersModule {}
