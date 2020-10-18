import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    data: {
      title: 'Focus on the business logic of your next application',
      description:
        'Angular Boilerplate is a starter for large front-end projects built under a clean architecture that helps to scale and maintain a fast workflow.',
      robots: 'index, follow',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
