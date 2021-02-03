import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
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
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onClickLogout(): void {
    this.logout.emit();
  }

  onClickToggleTheme(theme: ThemeList): void {
    this.themeService.changeTheme(theme);
  }
}
