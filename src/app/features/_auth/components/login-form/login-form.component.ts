import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/enums';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  Path = Path;

  constructor() {}

  ngOnInit(): void {}
}
