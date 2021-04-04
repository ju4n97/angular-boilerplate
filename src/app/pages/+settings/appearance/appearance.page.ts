import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APPEARANCE_SETTINGS_ROUTE } from './appearance.page.route';

@Component({
  templateUrl: './appearance.page.html',
  styleUrls: ['./appearance.page.scss'],
})
export class AppearancePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [AppearancePage],
  imports: [CommonModule, RouterModule.forChild([APPEARANCE_SETTINGS_ROUTE])],
})
export class AppearanceModule {}
