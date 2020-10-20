import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from '@app/@core/enums';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  returnUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams.returnUrl || `/${Path.Home}`;
  }

  ngOnInit(): void {}

  // onSubmit(username, password) {
  //   this.authService
  //     .login(username, password)
  //     .subscribe((data) => this.router.navigate([this.returnUrl]));
  // }
}
