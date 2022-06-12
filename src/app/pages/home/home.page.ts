import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeList, ThemeService } from '@lib/services/theme';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage {
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  handleThemeChange(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }
}
