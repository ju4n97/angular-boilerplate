import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeList, ThemeService } from '@lib/services/theme';
import { ROUTER_UTILS } from '@lib/utils/router.utils';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage {
  path = ROUTER_UTILS.config;
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  handleThemeChange(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }
}
