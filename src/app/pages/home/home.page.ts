import { Component } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  path = ROUTER_UTILS.config;
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  onClickChangeTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }
}
