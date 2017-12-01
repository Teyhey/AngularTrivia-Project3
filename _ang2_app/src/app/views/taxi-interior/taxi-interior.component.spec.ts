import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiInteriorComponent } from './taxi-interior.component';

describe('TaxiInteriorComponent', () => {
  let component: TaxiInteriorComponent;
  let fixture: ComponentFixture<TaxiInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
