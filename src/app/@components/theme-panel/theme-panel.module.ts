import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from '@app/@core/directives/click-outside/click-outside.module';
import { ThemePanelComponent } from './theme-panel.component';

@NgModule({
  declarations: [ThemePanelComponent],
  imports: [CommonModule, ClickOutsideModule],
  exports: [ThemePanelComponent],
})
export class ThemePanelModule {}
