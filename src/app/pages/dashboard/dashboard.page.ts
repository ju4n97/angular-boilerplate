import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  path = ROUTER_UTILS.config.base;
}
