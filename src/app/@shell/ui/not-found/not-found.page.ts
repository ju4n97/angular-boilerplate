import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';

@Component({
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage {
  path = ROUTER_UTILS.config.base;
}
