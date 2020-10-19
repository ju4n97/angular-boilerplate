import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordEmailSentPage } from './forgot-password-email-sent.page';

describe('ForgotPasswordEmailSentPage', () => {
  let component: ForgotPasswordEmailSentPage;
  let fixture: ComponentFixture<ForgotPasswordEmailSentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordEmailSentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordEmailSentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
