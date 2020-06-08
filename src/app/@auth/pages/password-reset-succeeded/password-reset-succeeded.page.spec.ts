import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetSucceededPage } from './password-reset-succeeded.page';

describe('PasswordResetSucceededPage', () => {
  let component: PasswordResetSucceededPage;
  let fixture: ComponentFixture<PasswordResetSucceededPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetSucceededPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetSucceededPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
