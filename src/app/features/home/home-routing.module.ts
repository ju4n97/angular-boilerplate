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
        'Angular boilerplate is a clean, intuitive, and fast starter project which contains a robust, maintainable, scalable, and agile architecture, allowing the developer to focus on the business logic and not on Front-end architecture matters.',
      robots: 'index, follow',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
