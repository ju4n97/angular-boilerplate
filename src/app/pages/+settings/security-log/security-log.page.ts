import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SECURITY_LOG_SETTINGS_ROUTE } from './security-log.page.route';

@Component({
  templateUrl: './security-log.page.html',
  styleUrls: ['./security-log.page.scss'],
})
export class SecurityLogPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [SecurityLogPage],
  imports: [CommonModule, RouterModule.forChild([SECURITY_LOG_SETTINGS_ROUTE])],
})
export class SecurityLogModule {}
