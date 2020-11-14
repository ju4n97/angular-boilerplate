import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordResetPage } from './password-reset.page';

describe('PasswordResetPage', () => {
  let component: PasswordResetPage;
  let fixture: ComponentFixture<PasswordResetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
