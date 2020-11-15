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
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() loading: boolean;

  @Output() signIn = new EventEmitter<Partial<User>>();

  path = Path;

  constructor() {}

  ngOnInit(): void {}

  onClickSignIn() {
    const user: Partial<User> = {
      username: '',
      password: '',
    };
    this.signIn.emit(user);
  }
}
