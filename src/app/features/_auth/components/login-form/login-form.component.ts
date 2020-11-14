import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Path } from '@app/@core/enums';
import { User } from '@app/@core/shared/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() loading: boolean;

  @Output() signIn = new EventEmitter<Partial<User>>();

  path = Path;

  constructor() {}

  ngOnInit(): void {}

  onClickSignIn() {
    const user: Partial<User> = {
      username: 'juanmesa2097',
      password: 'televition',
    };
    this.signIn.emit(user);
  }
}
