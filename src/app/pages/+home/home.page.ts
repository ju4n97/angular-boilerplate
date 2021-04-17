import { Component, OnInit } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { Path } from '@core/structs';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  path = Path;
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onClickChangeTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }
}
