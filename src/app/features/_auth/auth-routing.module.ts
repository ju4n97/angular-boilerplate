import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from '@app/@core/enums';
import { ForgotPasswordEmailSentPage } from './pages/forgot-password-email-sent/forgot-password-email-sent.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { LOGIN_ROUTE } from './pages/login/login.page.route';
import { PasswordResetFailedPage } from './pages/password-reset-failed/password-reset-failed.page';
import { PasswordResetSucceededPage } from './pages/password-reset-succeeded/password-reset-succeeded.page';
import { PasswordResetPage } from './pages/password-reset/password-reset.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

const routes: Routes = [
  LOGIN_ROUTE,
  {
    path: Path.SignUp,
    component: SignUpPage,
  },
  {
    path: Path.ForgotPassword,
    component: ForgotPasswordPage,
  },
  {
    path: Path.ForgotPasswordEmailSent,
    component: ForgotPasswordEmailSentPage,
  },
  {
    path: Path.PasswordReset,
    component: PasswordResetPage,
  },
  {
    path: Path.PasswordResetSucceeded,
    component: PasswordResetSucceededPage,
  },
  {
    path: Path.PasswordResetFailed,
    component: PasswordResetFailedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
