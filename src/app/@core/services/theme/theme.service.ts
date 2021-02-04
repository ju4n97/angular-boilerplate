import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { getItem, setItem, StorageItem } from '@app/@core/utils';
import { BehaviorSubject } from 'rxjs';
import { ThemeList } from './theme.config';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme$ = new BehaviorSubject<ThemeList>(
    this.currentTheme || ThemeList.System
  );

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get currentTheme(): ThemeList {
    return getItem(StorageItem.Theme);
  }

  init() {
    if (!this.currentTheme) {
      this.listenForMediaQuery();
    }

    this.listenForThemeChanges();
  }

  changeTheme(theme: ThemeList): void {
    this.currentTheme$.next(theme);
  }

  private listenForMediaQuery(): void {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    colorScheme.addEventListener('change', (e: MediaQueryListEvent) => {
      const currentTheme = this.currentTheme;

      if (currentTheme === ThemeList.System) {
        const theme = e.matches ? ThemeList.Dark : ThemeList.Light;
        this.setTheme(theme);
      }
    });
  }

  private listenForThemeChanges(): void {
    this.currentTheme$.subscribe((theme) => {
      this.setTheme(theme);
    });
  }

  private setTheme(theme: ThemeList): void {
    console.log(theme);
    this.clearThemes();
    this.document.body.classList.add(theme);
    setItem(StorageItem.Theme, theme);
  }

  private clearThemes(): void {
    for (const theme in ThemeList) {
      this.document.body.classList.remove(ThemeList[theme]);
    }
  }
}
