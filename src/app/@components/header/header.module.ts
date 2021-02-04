import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemePanelModule } from '../theme-panel/theme-panel.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, ThemePanelModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
