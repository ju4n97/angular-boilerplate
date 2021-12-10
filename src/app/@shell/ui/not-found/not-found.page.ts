import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';

@Component({
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.css'],
})
export class NotFoundPage {
  path = ROUTER_UTILS.config.base;
}
