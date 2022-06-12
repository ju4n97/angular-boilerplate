import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityPage } from './accessibility.page';

describe('AccessibilityPage', () => {
  let component: AccessibilityPage;
  let fixture: ComponentFixture<AccessibilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccessibilityPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
