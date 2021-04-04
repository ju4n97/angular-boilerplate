import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MY_PROFILE_ROUTE } from './my-profile.page.route';

@Component({
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [MyProfilePage],
  imports: [CommonModule, RouterModule.forChild([MY_PROFILE_ROUTE])],
})
export class MyProfileModule {}
