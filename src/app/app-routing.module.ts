import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from '@core/guards';
import { Path } from '@core/structs';
import { NotFoundModule } from '@pages/_not-found/not-found.module';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  // Public
  {
    path: Path.Home,
    loadChildren: () =>
      import('@pages/+home/home.module').then((m) => m.HomeModule),
  },

  // Auth
  {
    path: Path.Auth,
    canActivate: [NoAuthGuard],
    children: [
      {
        path: Path.SignIn,
        loadChildren: () =>
          import('@pages/+auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: Path.SignUp,
        loadChildren: () =>
          import('@pages/+auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule,
          ),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import('@pages/+auth/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule,
          ),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import(
            '@pages/+auth/forgot-password-email-sent/forgot-password-email-sent.module'
          ).then((m) => m.ForgotPasswordEmailSentModule),
      },
      {
        path: Path.PasswordReset,
        loadChildren: () =>
          import('@pages/+auth/password-reset/password-reset.module').then(
            (m) => m.PasswordResetModule,
          ),
      },
      {
        path: Path.PasswordResetSucceeded,
        loadChildren: () =>
          import(
            '@pages/+auth/password-reset-succeeded/password-reset-succeeded.module'
          ).then((m) => m.PasswordResetSucceededModule),
      },
      {
        path: Path.PasswordResetFailed,
        loadChildren: () =>
          import(
            '@pages/+auth/password-reset-failed/password-reset-failed.module'
          ).then((m) => m.PasswordResetFailedModule),
      },
    ],
  },

  // App
  {
    path: Path.App,
    canActivate: [AuthGuard],
    children: [
      {
        path: Path.Dashboard,
        loadChildren: () =>
          import('@pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
    ],
  },
  {
    path: Path.Settings,
    canActivate: [AuthGuard],
    children: [
      {
        path: Path.SettingsAccount,
        loadChildren: () =>
          import('@pages/+settings/account/account.module').then(
            (m) => m.AccountModule,
          ),
      },
      {
        path: Path.SettingsAppearance,
        loadChildren: () =>
          import('@pages/+settings/appearance/appearance.module').then(
            (m) => m.AppearanceModule,
          ),
      },
      {
        path: Path.SettingsBilling,
        loadChildren: () =>
          import('@pages/+settings/billing/billing.module').then(
            (m) => m.BillingModule,
          ),
      },
      {
        path: Path.SettingsBlockedUsers,
        loadChildren: () =>
          import('@pages/+settings/blocked-users/blocked-users.module').then(
            (m) => m.BlockedUsersModule,
          ),
      },
      {
        path: Path.SettingsNotifications,
        loadChildren: () =>
          import('@pages/+settings/notifications/notifications.module').then(
            (m) => m.NotificationsModule,
          ),
      },
      {
        path: Path.SettingsSecurity,
        loadChildren: () =>
          import('@pages/+settings/security/security.module').then(
            (m) => m.SecurityModule,
          ),
      },
      {
        path: Path.SettingsSecurityLog,
        loadChildren: () =>
          import('@pages/+settings/security-log/security-log.module').then(
            (m) => m.SecurityLogModule,
          ),
      },
    ],
  },
  {
    path: Path.Users,
    canActivate: [AuthGuard],
    children: [
      {
        path: Path.UsersProfile,
        loadChildren: () =>
          import('@pages/+user/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule,
          ),
      },
      {
        path: Path.UsersOverview,
        loadChildren: () =>
          import('@pages/+user/overview/overview.module').then(
            (m) => m.OverviewModule,
          ),
      },
    ],
  },

  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('@pages/_not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
    component: NotFoundModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
