import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from '@app/@core/enums';
import { User } from '@app/@core/shared/user';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  returnUrl: string;
  errorMessage: string;
  loading = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ||
      `/${Path.App}/${Path.Dashboard}`;
  }

  ngOnInit(): void {}

  async onSignIn(user: User) {
    this.loading = true;
    try {
      await this.authService.login(user).toPromise();
      this.router.navigate([this.returnUrl]);
    } catch (err) {
      const message = [401, 403].includes(err.status)
        ? err.error.message
        : err.message;

      this.errorMessage = message;
    } finally {
      this.loading = false;
    }
  }
}
