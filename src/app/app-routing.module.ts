import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from '@core/guards';
import { Path } from '@core/structs';
import { NotFoundPage } from '@pages/_not-found/not-found.page';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  // Public
  {
    path: Path.Home,
    loadChildren: () =>
      import('@pages/+home/home.page').then((m) => m.HomeModule),
  },

  // Auth
  {
    path: Path.Auth,
    canActivate: [NoAuthGuard],
    children: [
      {
        path: Path.SignIn,
        loadChildren: () =>
          import('@pages/+auth/sign-in/sign-in.page').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: Path.SignUp,
        loadChildren: () =>
          import('@pages/+auth/sign-up/sign-up.page').then((m) => m.SignUpPage),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import('@pages/+auth/forgot-password/forgot-password.page').then(
            (m) => m.ForgotPasswordModule,
          ),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import(
            '@pages/+auth/forgot-password-email-sent/forgot-password-email-sent.page'
          ).then((m) => m.ForgotPasswordEmailSentModule),
      },
      {
        path: Path.PasswordReset,
        loadChildren: () =>
          import('@pages/+auth/password-reset/password-reset.page').then(
            (m) => m.PasswordResetModule,
          ),
      },
      {
        path: Path.PasswordResetSucceeded,
        loadChildren: () =>
          import(
            '@pages/+auth/password-reset-succeeded/password-reset-succeeded.page'
          ).then((m) => m.PasswordResetSucceededModule),
      },
      {
        path: Path.PasswordResetFailed,
        loadChildren: () =>
          import(
            '@pages/+auth/password-reset-failed/password-reset-failed.page'
          ).then((m) => m.PasswordResetFailedModule),
      },
    ],
  },

  // App
  {
    path: Path.App,
    redirectTo: `${Path.App}`,
    pathMatch: 'full',
  },
  {
    path: Path.App,
    canActivate: [AuthGuard],
    children: [
      {
        path: Path.Dashboard,
        loadChildren: () =>
          import('@pages/dashboard/dashboard.page').then(
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
          import('@pages/+settings/account/account.page').then(
            (m) => m.AccountModule,
          ),
      },
      {
        path: Path.SettingsAppearance,
        loadChildren: () =>
          import('@pages/+settings/appearance/appearance.page').then(
            (m) => m.AppearanceModule,
          ),
      },
      {
        path: Path.SettingsBilling,
        loadChildren: () =>
          import('@pages/+settings/billing/billing.page').then(
            (m) => m.BillingModule,
          ),
      },
      {
        path: Path.SettingsBlockedUsers,
        loadChildren: () =>
          import('@pages/+settings/blocked-users/blocked-users.page').then(
            (m) => m.BlockedUsersModule,
          ),
      },
      {
        path: Path.SettingsNotifications,
        loadChildren: () =>
          import('@pages/+settings/notifications/notifications.page').then(
            (m) => m.NotificationsModule,
          ),
      },
      {
        path: Path.SettingsSecurity,
        loadChildren: () =>
          import('@pages/+settings/security/security.page').then(
            (m) => m.SecurityModule,
          ),
      },
      {
        path: Path.SettingsSecurityLog,
        loadChildren: () =>
          import('@pages/+settings/security-log/security-log.page').then(
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
          import('@pages/+user/my-profile/my-profile.page').then(
            (m) => m.MyProfilePage,
          ),
      },
      {
        path: Path.UsersOverview,
        loadChildren: () =>
          import('@pages/+user/overview/overview.page').then(
            (m) => m.OverviewModule,
          ),
      },
    ],
  },

  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('@pages/_not-found/not-found.page').then((m) => m.NotFoundModule),
    component: NotFoundPage,
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
