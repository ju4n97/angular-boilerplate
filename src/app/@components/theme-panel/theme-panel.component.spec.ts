import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePanelComponent } from './theme-panel.component';

describe('ThemePanelComponent', () => {
  let component: ThemePanelComponent;
  let fixture: ComponentFixture<ThemePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemePanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
