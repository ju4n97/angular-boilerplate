import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { USERS_OVERVIEW_ROUTE } from './overview.page.route';

@Component({
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [OverviewPage],
  imports: [CommonModule, RouterModule.forChild([USERS_OVERVIEW_ROUTE])],
})
export class OverviewModule {}
