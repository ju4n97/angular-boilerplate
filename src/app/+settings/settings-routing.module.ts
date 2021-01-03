import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACCOUNT_SETTINGS_ROUTE } from './pages/account/account.page.route';
import { APPEARANCE_SETTINGS_ROUTE } from './pages/appearance/appearance.page.route';
import { BILLING_SETTINGS_ROUTE } from './pages/billing/billing.page.route';
import { BLOCKED_USERS_SETTINGS_ROUTE } from './pages/blocked-users/blocked-users.page.route';
import { NOTIFICATIONS_SETTINGS_ROUTE } from './pages/notifications/notifications.page.route';
import { SECURITY_LOG_SETTINGS_ROUTE } from './pages/security-log/security-log.page.route';
import { SECURITY_SETTINGS_ROUTE } from './pages/security/security.page.route';

const routes: Routes = [
  ACCOUNT_SETTINGS_ROUTE,
  APPEARANCE_SETTINGS_ROUTE,
  BILLING_SETTINGS_ROUTE,
  BLOCKED_USERS_SETTINGS_ROUTE,
  NOTIFICATIONS_SETTINGS_ROUTE,
  SECURITY_SETTINGS_ROUTE,
  SECURITY_LOG_SETTINGS_ROUTE,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
