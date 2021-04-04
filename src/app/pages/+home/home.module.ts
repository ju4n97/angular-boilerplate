import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        data: {
          title: 'Home',
          description:
            'Start writing your business logic right away without any concern on architecture matters.',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class HomeModule {}
