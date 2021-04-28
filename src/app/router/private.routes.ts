import { Routes } from '@angular/router';
import { AuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: Path.Dashboard,
        loadChildren: () =>
          import('@app/pages/private/dashboard/dashboard.module').then(
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
          import('@pages/private/settings/account/account.module').then(
            (m) => m.AccountModule,
          ),
      },
      {
        path: Path.SettingsAppearance,
        loadChildren: () =>
          import('@pages/private/settings/appearance/appearance.module').then(
            (m) => m.AppearanceModule,
          ),
      },
      {
        path: Path.SettingsBilling,
        loadChildren: () =>
          import('@pages/private/settings/billing/billing.module').then(
            (m) => m.BillingModule,
          ),
      },
      {
        path: Path.SettingsBlockedUsers,
        loadChildren: () =>
          import(
            '@pages/private/settings/blocked-users/blocked-users.module'
          ).then((m) => m.BlockedUsersModule),
      },
      {
        path: Path.SettingsNotifications,
        loadChildren: () =>
          import(
            '@pages/private/settings/notifications/notifications.module'
          ).then((m) => m.NotificationsModule),
      },
      {
        path: Path.SettingsSecurity,
        loadChildren: () =>
          import('@pages/private/settings/security/security.module').then(
            (m) => m.SecurityModule,
          ),
      },
      {
        path: Path.SettingsSecurityLog,
        loadChildren: () =>
          import(
            '@pages/private/settings/security-log/security-log.module'
          ).then((m) => m.SecurityLogModule),
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
          import('@pages/private/user/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule,
          ),
      },
      {
        path: Path.UsersOverview,
        loadChildren: () =>
          import('@pages/private/user/overview/overview.module').then(
            (m) => m.OverviewModule,
          ),
      },
    ],
  },
];
