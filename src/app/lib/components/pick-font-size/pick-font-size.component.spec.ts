import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PickFontSizeComponent } from './pick-font-size.component';

describe('PickFontSizeComponent', () => {
    let component: PickFontSizeComponent;
    let fixture: ComponentFixture<PickFontSizeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PickFontSizeComponent, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PickFontSizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
