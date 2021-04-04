import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ACCOUNT_SETTINGS_ROUTE } from './account.page.route';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [AccountPage],
  imports: [CommonModule, RouterModule.forChild([ACCOUNT_SETTINGS_ROUTE])],
})
export class AccountModule {}
