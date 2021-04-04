import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PASSWORD_RESET_ROUTE } from '../password-reset/password-reset.page.route';

@Component({
  templateUrl: './password-reset-failed.page.html',
  styleUrls: ['./password-reset-failed.page.scss'],
})
export class PasswordResetFailedPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [PasswordResetFailedPage],
  imports: [CommonModule, RouterModule.forChild([PASSWORD_RESET_ROUTE])],
})
export class PasswordResetFailedModule {}
