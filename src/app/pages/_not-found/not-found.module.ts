import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Path } from '@app/@core/structs';
import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: Path.NotFound,
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
