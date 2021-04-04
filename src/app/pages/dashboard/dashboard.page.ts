import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTE } from './dashboard.page.route';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [DashboardPage],
  imports: [CommonModule, RouterModule.forChild([DASHBOARD_ROUTE])],
})
export class DashboardModule {}
