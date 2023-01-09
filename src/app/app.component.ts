import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutHorizontalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAuthenticated$ = inject(AuthService).isAuthenticated$;

  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.init();
  }
}
