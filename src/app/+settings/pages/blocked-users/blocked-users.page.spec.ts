import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedUsersPage } from './blocked-users.page';

describe('BlockedUsersPage', () => {
  let component: BlockedUsersPage;
  let fixture: ComponentFixture<BlockedUsersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedUsersPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
