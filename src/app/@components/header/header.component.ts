import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();

  path = Path;

  constructor() {}

  ngOnInit(): void {}

  onClickLogout(): void {
    this.logout.emit();
  }
}
