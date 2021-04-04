import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PASSWORD_RESET_ROUTE } from './password-reset.page.route';

@Component({
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [PasswordResetPage],
  imports: [CommonModule, RouterModule.forChild([PASSWORD_RESET_ROUTE])],
})
export class PasswordResetModule {}
