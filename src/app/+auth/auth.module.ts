import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { PasswordResetFormComponent } from './components/password-reset-form/password-reset-form.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { ForgotPasswordEmailSentPage } from './pages/forgot-password-email-sent/forgot-password-email-sent.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { PasswordResetFailedPage } from './pages/password-reset-failed/password-reset-failed.page';
import { PasswordResetSucceededPage } from './pages/password-reset-succeeded/password-reset-succeeded.page';
import { PasswordResetPage } from './pages/password-reset/password-reset.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

@NgModule({
  declarations: [
    SignInPage,
    SignUpPage,
    ForgotPasswordPage,
    ForgotPasswordEmailSentPage,
    PasswordResetPage,
    PasswordResetSucceededPage,
    PasswordResetFailedPage,
    SignInFormComponent,
    SignUpFormComponent,
    ForgotPasswordFormComponent,
    PasswordResetFormComponent,
    SignInFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
