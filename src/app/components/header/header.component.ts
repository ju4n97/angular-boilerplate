import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { Path } from '@app/@core/structs';
import { AuthService } from '@app/pages/+auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  path = Path;
  theme = ThemeList;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  onClickSignOut(): void {
    this.authService.signOut();
    this.router.navigate(['/', Path.SignIn]);
  }

  onClickToggleTheme(theme: ThemeList): void {
    this.themeService.changeTheme(theme);
  }
}
