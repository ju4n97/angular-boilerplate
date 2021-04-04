import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BILLING_SETTINGS_ROUTE } from './billing.page.route';

@Component({
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [BillingPage],
  imports: [CommonModule, RouterModule.forChild([BILLING_SETTINGS_ROUTE])],
})
export class BillingModule {}
