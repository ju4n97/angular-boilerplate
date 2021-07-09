import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityPage } from './security.page';

@NgModule({
  declarations: [SecurityPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SecurityPage,
        data: {
          title: 'Security settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class SecurityModule {}
