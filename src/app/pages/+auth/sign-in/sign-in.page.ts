import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '@app/pages/+auth/_services/auth.service';
import { Path } from '@core/structs';
import { SIGN_IN_ROUTE } from './sign-in.page.route';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  returnUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ||
      `/${Path.App}`;
  }

  ngOnInit(): void {}

  onClickSignIn(): void {
    this.authService.signIn();
    this.router.navigate([this.returnUrl]);
  }
}

@NgModule({
  declarations: [SignInPage],
  imports: [CommonModule, RouterModule.forChild([SIGN_IN_ROUTE])],
})
export class SignInModule {}
