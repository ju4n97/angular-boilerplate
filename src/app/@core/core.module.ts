import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './handlers';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
})
export class CoreModule {}
