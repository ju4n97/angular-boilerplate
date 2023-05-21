import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PickSchemaComponent } from './pick-schema.component';

describe('PickSchemaComponent', () => {
    let component: PickSchemaComponent;
    let fixture: ComponentFixture<PickSchemaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PickSchemaComponent, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PickSchemaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
