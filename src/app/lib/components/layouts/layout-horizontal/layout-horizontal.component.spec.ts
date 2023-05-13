import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutHorizontalComponent } from './layout-horizontal.component';

describe('LayoutHorizontalComponent', () => {
    let component: LayoutHorizontalComponent;
    let fixture: ComponentFixture<LayoutHorizontalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutHorizontalComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutHorizontalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
