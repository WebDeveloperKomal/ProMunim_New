import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerDetailsDemoComponent } from './view-customer-details-demo.component';

describe('ViewCustomerDetailsDemoComponent', () => {
  let component: ViewCustomerDetailsDemoComponent;
  let fixture: ComponentFixture<ViewCustomerDetailsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCustomerDetailsDemoComponent]
    });
    fixture = TestBed.createComponent(ViewCustomerDetailsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
