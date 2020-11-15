import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPage } from './sign-in.page';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
