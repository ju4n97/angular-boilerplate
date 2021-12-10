import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { AuthService } from '@pages/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  path = ROUTER_UTILS.config.base;

  constructor(private router: Router, private authService: AuthService) {}

  onClickSignOut(): void {
    this.authService.signOut();

    const { root, signIn } = ROUTER_UTILS.config.auth;
    this.router.navigate(['/', root, signIn]);
  }
}
