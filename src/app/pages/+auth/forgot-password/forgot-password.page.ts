import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FORGOT_PASSWORD_ROUTE } from './forgot-password.page.route';

@Component({
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [CommonModule, RouterModule.forChild([FORGOT_PASSWORD_ROUTE])],
})
export class ForgotPasswordModule {}
