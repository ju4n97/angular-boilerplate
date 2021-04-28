import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityLogPage } from './security-log.page';

@NgModule({
  declarations: [SecurityLogPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SecurityLogPage,
        data: {
          title: 'Security log settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class SecurityLogModule {}
