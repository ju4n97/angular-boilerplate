import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BytesPipe } from './bytes.pipe';

@NgModule({
  declarations: [BytesPipe],
  imports: [CommonModule],
  exports: [BytesPipe],
})
export class BytesModule {}
