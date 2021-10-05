import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { AccountPage } from './pages/account/account.page';
import { AppearancePage } from './pages/appearance/appearance.page';
import { BillingPage } from './pages/billing/billing.page';
import { BlockedUsersPage } from './pages/blocked-users/blocked-users.page';
import { NotificationsPage } from './pages/notifications/notifications.page';
import { SecurityLogPage } from './pages/security-log/security-log.page';
import { SecurityPage } from './pages/security/security.page';

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.settings.account,
    component: AccountPage,
  },
  {
    path: ROUTER_UTILS.config.settings.appearance,
    component: AppearancePage,
  },
  {
    path: ROUTER_UTILS.config.settings.billing,
    component: BillingPage,
  },
  {
    path: ROUTER_UTILS.config.settings.blockedUsers,
    component: BlockedUsersPage,
  },
  {
    path: ROUTER_UTILS.config.settings.notifications,
    component: NotificationsPage,
  },
  {
    path: ROUTER_UTILS.config.settings.security,
    component: SecurityPage,
  },
  {
    path: ROUTER_UTILS.config.settings.securityLog,
    component: SecurityLogPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
