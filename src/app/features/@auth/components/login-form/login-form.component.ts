import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PathMap } from '@app/@core/enums';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  pathMap = PathMap;

  constructor() {}

  ngOnInit(): void {}
}
