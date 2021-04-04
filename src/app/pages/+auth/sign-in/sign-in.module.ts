import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInPage } from './sign-in.page';

@NgModule({
  declarations: [SignInPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInPage,
        data: {
          title: 'Sign into Angular Boilerplate',
          description:
            'Start writing your business logic right away without any concern on architecture matters.',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class SignInModule {}
