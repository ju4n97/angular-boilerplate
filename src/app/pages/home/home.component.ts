import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTheme, ThemeService } from '@lib/services/theme';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTheme!: AppTheme | null;

  private readonly _destroy$ = new Subject();

  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.currentTheme$
      .pipe(takeUntil(this._destroy$))
      .subscribe((theme) => (this.currentTheme = theme));
  }

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  handleThemeChange(theme: AppTheme): void {
    this.themeService.setTheme(theme);
  }
}
