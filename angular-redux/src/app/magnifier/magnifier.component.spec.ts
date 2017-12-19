import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifierComponent } from './magnifier.component';

describe('MagnifierComponent', () => {
    let component: MagnifierComponent;
    let fixture: ComponentFixture<MagnifierComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MagnifierComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MagnifierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
