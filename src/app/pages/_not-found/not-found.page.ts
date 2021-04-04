import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NOT_FOUND_ROUTE } from './not-found.page.route';

@Component({
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, RouterModule.forChild([NOT_FOUND_ROUTE])],
})
export class NotFoundModule {}
