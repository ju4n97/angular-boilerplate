import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalServerErrorPage } from './internal-server-error.page';

describe('InternalServerErrorPage', () => {
  let component: InternalServerErrorPage;
  let fixture: ComponentFixture<InternalServerErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalServerErrorPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalServerErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
