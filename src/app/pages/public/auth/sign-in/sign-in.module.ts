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
          title: 'Sign in to Angular Boilerplate',
          description:
            'Start writing your application right away without any concern on architecture matters.',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class SignInModule {}
