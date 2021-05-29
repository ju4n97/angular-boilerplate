import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignUpPage } from './sign-up.page';

@NgModule({
  declarations: [SignUpPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpPage,
        data: {
          title: 'Join to Angular Boilerplate',
          description:
            'Angular starter for enterprise-grade front-end projects, built under a clean architecture that helps to scale and maintain a fast workflow.',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class SignUpModule {}
