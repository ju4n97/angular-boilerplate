import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  private _callbackURL: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || `/`;
  }

  onClickSignIn(): void {
    this._authService.login();
    this._router.navigate([this._callbackURL]);
  }
}
