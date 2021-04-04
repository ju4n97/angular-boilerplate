import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Path } from '@core/structs';
import { HOME_ROUTE } from './home.page.route';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  path = Path;

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, RouterModule.forChild([HOME_ROUTE])],
})
export class HomeModule {}
