import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { ForgotPasswordEmailSentPage } from './pages/forgot-password-email-sent/forgot-password-email-sent.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { PasswordResetFailedPage } from './pages/password-reset-failed/password-reset-failed.page';
import { PasswordResetSucceededPage } from './pages/password-reset-succeeded/password-reset-succeeded.page';
import { PasswordResetPage } from './pages/password-reset/password-reset.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.auth.signIn,
    component: SignInPage,
  },
  {
    path: ROUTER_UTILS.config.auth.signUp,
    component: SignUpPage,
  },
  {
    path: ROUTER_UTILS.config.auth.forgotPassword,
    component: ForgotPasswordPage,
  },
  {
    path: ROUTER_UTILS.config.auth.forgotPasswordEmailSent,
    component: ForgotPasswordEmailSentPage,
  },
  {
    path: ROUTER_UTILS.config.auth.passwordReset,
    component: PasswordResetPage,
  },
  {
    path: ROUTER_UTILS.config.auth.passwordResetSucceeded,
    component: PasswordResetSucceededPage,
  },
  {
    path: ROUTER_UTILS.config.auth.passwordResetFailed,
    component: PasswordResetFailedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
