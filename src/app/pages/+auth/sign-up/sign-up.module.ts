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
            'Start writing your business logic right away without any concern on architecture matters.',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class SignUpModule {}
