import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './internal-server-error.page.html',
  styleUrls: ['./internal-server-error.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalServerErrorPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
