import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SIGN_UP_ROUTE } from './sign-up.page.route';

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [SignUpPage],
  imports: [CommonModule, RouterModule.forChild([SIGN_UP_ROUTE])],
})
export class SignUpModule {}
