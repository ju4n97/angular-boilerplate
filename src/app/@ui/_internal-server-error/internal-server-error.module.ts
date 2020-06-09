import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternalServerErrorRoutingModule } from './internal-server-error-routing.module';
import { InternalServerErrorPage } from './pages/internal-server-error/internal-server-error.page';

@NgModule({
  declarations: [InternalServerErrorPage],
  imports: [CommonModule, InternalServerErrorRoutingModule],
})
export class InternalServerErrorModule {}
