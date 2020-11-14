import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordResetFormComponent } from './password-reset-form.component';

describe('PasswordResetFormComponent', () => {
  let component: PasswordResetFormComponent;
  let fixture: ComponentFixture<PasswordResetFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
