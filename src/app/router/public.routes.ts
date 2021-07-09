import { Routes } from '@angular/router';
import { NoAuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.Home,
    loadChildren: () =>
      import('@app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    children: [
      {
        path: Path.SignIn,
        loadChildren: () =>
          import('@app/pages/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: Path.SignUp,
        loadChildren: () =>
          import('@app/pages/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule,
          ),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import('@app/pages/auth/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule,
          ),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import(
            '@app/pages/auth/forgot-password-email-sent/forgot-password-email-sent.module'
          ).then((m) => m.ForgotPasswordEmailSentModule),
      },
      {
        path: Path.PasswordReset,
        loadChildren: () =>
          import('@app/pages/auth/password-reset/password-reset.module').then(
            (m) => m.PasswordResetModule,
          ),
      },
      {
        path: Path.PasswordResetSucceeded,
        loadChildren: () =>
          import(
            '@app/pages/auth/password-reset-succeeded/password-reset-succeeded.module'
          ).then((m) => m.PasswordResetSucceededModule),
      },
      {
        path: Path.PasswordResetFailed,
        loadChildren: () =>
          import(
            '@app/pages/auth/password-reset-failed/password-reset-failed.module'
          ).then((m) => m.PasswordResetFailedModule),
      },
    ],
  },
];
