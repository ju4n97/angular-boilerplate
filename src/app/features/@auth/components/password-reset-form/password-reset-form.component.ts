import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordResetFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
