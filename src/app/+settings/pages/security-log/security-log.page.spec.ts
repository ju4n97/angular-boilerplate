import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLogPage } from './security-log.page';

describe('SecurityLogPage', () => {
  let component: SecurityLogPage;
  let fixture: ComponentFixture<SecurityLogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityLogPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
