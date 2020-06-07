import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found/not-found.page';
import { ResponsesRoutingModule } from './responses-routing.module';

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, ResponsesRoutingModule],
  exports: [NotFoundPage],
})
export class ResponsesModule {}
