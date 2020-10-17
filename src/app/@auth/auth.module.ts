import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PasswordResetFormComponent } from './components/password-reset-form/password-reset-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { ForgotPasswordEmailSentPage } from './pages/forgot-password-email-sent/forgot-password-email-sent.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { LoginPage } from './pages/login/login.page';
import { PasswordResetFailedPage } from './pages/password-reset-failed/password-reset-failed.page';
import { PasswordResetSucceededPage } from './pages/password-reset-succeeded/password-reset-succeeded.page';
import { PasswordResetPage } from './pages/password-reset/password-reset.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

@NgModule({
  declarations: [
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    ForgotPasswordEmailSentPage,
    PasswordResetPage,
    PasswordResetSucceededPage,
    PasswordResetFailedPage,
    LoginFormComponent,
    SignUpFormComponent,
    ForgotPasswordFormComponent,
    PasswordResetFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
