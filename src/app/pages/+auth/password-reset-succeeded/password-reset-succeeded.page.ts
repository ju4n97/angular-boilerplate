import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PASSWORD_RESET_SUCCEEDED_ROUTE } from './password-reset-succeeded.page.route';

@Component({
  templateUrl: './password-reset-succeeded.page.html',
  styleUrls: ['./password-reset-succeeded.page.scss'],
})
export class PasswordResetSucceededPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [PasswordResetSucceededPage],
  imports: [
    CommonModule,
    RouterModule.forChild([PASSWORD_RESET_SUCCEEDED_ROUTE]),
  ],
})
export class PasswordResetSucceededModule {}
