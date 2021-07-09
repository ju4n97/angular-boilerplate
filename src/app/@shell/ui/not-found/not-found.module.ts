import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ROUTER_UTILS.config.errorResponse.notFound,
        component: NotFoundPage,
        data: {
          title: 'The page you were looking for could not be found',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class NotFoundModule {}
