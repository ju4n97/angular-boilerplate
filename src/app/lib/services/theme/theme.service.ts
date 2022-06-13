import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { storage } from '@lib/utils';
import { fromEventPattern, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DEFAULT_BASE_THEME, ThemeList } from './theme.config';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  destroy$ = new Subject();

  private readonly _mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  get systemTheme(): ThemeList.Light | ThemeList.Dark {
    return this._mediaQuery.matches ? ThemeList.Dark : ThemeList.Light;
  }

  get storedTheme(): ThemeList | null {
    return storage.getItem('App/theme');
  }

  set storedTheme(theme: ThemeList | null) {
    storage.setItem('App/theme', theme as ThemeList);
  }

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  init(): void {
    this.setTheme(this.storedTheme || DEFAULT_BASE_THEME);
    this._listenForMediaQueryChanges();
  }

  /**
   * Manually changes theme in LocalStorage & HTML body
   *
   * @param theme new theme
   */
  setTheme(theme: ThemeList): void {
    this._clearThemes();
    this.storedTheme = theme;

    let bodyClass = theme;

    if (theme === ThemeList.System) {
      bodyClass = this.systemTheme;
    }
    this._document.body.classList.add(bodyClass);
  }

  /**
   * Handles system theme changes & applies theme automatically
   *
   */
  private _listenForMediaQueryChanges(): void {
    fromEventPattern<MediaQueryListEvent>(
      this._mediaQuery.addListener.bind(this._mediaQuery),
      this._mediaQuery.removeListener.bind(this._mediaQuery),
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        // Only applies changes when the current theme is "system"
        if (this.storedTheme === ThemeList.System) {
          this.setTheme(ThemeList.System);
        }
      });
  }

  /**
   * Clears all themes in ThemeList enum from the HTML element
   *
   */
  private _clearThemes(): void {
    for (const theme in ThemeList) {
      const key: ThemeList = ThemeList[theme as keyof typeof ThemeList];
      this._document.body.classList.remove(key);
    }
  }
}
