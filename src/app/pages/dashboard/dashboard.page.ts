import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  path = Path;

  constructor() {}

  ngOnInit(): void {}
}
