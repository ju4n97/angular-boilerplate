import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FORGOT_PASSWORD_EMAIL_SENT_ROUTE } from './pages/forgot-password-email-sent/forgot-password-email-sent.page.route';
import { FORGOT_PASSWORD_ROUTE } from './pages/forgot-password/forgot-password.page.route';
import { PASSWORD_RESET_FAILED_ROUTE } from './pages/password-reset-failed/password-reset-failed.page.route';
import { PASSWORD_RESET_SUCCEEDED_ROUTE } from './pages/password-reset-succeeded/password-reset-succeeded.page.route';
import { PASSWORD_RESET_ROUTE } from './pages/password-reset/password-reset.page.route';
import { SIGN_IN_ROUTE } from './pages/sign-in/sign-in.page.route';
import { SIGN_UP_ROUTE } from './pages/sign-up/sign-up.page.route';

const routes: Routes = [
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  FORGOT_PASSWORD_EMAIL_SENT_ROUTE,
  PASSWORD_RESET_ROUTE,
  PASSWORD_RESET_SUCCEEDED_ROUTE,
  PASSWORD_RESET_FAILED_ROUTE,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
