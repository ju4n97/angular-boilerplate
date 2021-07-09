import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountPage } from './pages/account/account.page';
import { AppearancePage } from './pages/appearance/appearance.page';
import { BillingPage } from './pages/billing/billing.page';
import { BlockedUsersPage } from './pages/blocked-users/blocked-users.page';
import { NotificationsPage } from './pages/notifications/notifications.page';
import { SecurityLogPage } from './pages/security-log/security-log.page';
import { SecurityPage } from './pages/security/security.page';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    AccountPage,
    AppearancePage,
    BillingPage,
    BlockedUsersPage,
    NotificationsPage,
    SecurityPage,
    SecurityLogPage,
  ],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
