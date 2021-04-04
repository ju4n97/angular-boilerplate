import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SECURITY_SETTINGS_ROUTE } from './security.page.route';

@Component({
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [SecurityPage],
  imports: [CommonModule, RouterModule.forChild([SECURITY_SETTINGS_ROUTE])],
})
export class SecurityModule {}
