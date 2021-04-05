import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForgotPasswordPage,
        data: {
          title: 'Did you forget your password?',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt?',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class ForgotPasswordModule {}
