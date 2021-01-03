import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from './settings-routing.module';
import { AccountPage } from './pages/account/account.page';
import { SecurityPage } from './pages/security/security.page';
import { SecurityLogPage } from './pages/security-log/security-log.page';
import { AppearancePage } from './pages/appearance/appearance.page';
import { BillingPage } from './pages/billing/billing.page';
import { NotificationsPage } from './pages/notifications/notifications.page';
import { BlockedUsersPage } from './pages/blocked-users/blocked-users.page';

@NgModule({
  declarations: [AccountPage, SecurityPage, SecurityLogPage, AppearancePage, BillingPage, NotificationsPage, BlockedUsersPage],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
