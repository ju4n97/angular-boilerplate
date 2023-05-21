import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PickPrimaryColorComponent } from './pick-primary-color.component';

describe('PickPrimaryColorComponent', () => {
    let component: PickPrimaryColorComponent;
    let fixture: ComponentFixture<PickPrimaryColorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PickPrimaryColorComponent, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PickPrimaryColorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
