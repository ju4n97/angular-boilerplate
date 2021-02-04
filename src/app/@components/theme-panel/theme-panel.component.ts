import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';

@Component({
  selector: 'app-theme-panel',
  templateUrl: './theme-panel.component.html',
  styleUrls: ['./theme-panel.component.scss'],
})
export class ThemePanelComponent implements OnInit {
  theme: ThemeList;
  popupOpen = false;
  themeList = ThemeList;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      this.popupOpen = false;
    }
  }

  onChange(theme: ThemeList): void {
    this.theme = theme;
    this.themeService.changeTheme(theme);
  }
}
