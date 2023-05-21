import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountMenuComponent } from './account-menu.component';

describe('AccountMenuComponent', () => {
    let component: AccountMenuComponent;
    let fixture: ComponentFixture<AccountMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AccountMenuComponent, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
