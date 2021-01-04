import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { OverviewPage } from './pages/overview/overview.page';
import { MyProfilePage } from './pages/my-profile/my-profile.page';

@NgModule({
  declarations: [OverviewPage, MyProfilePage],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
