import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoforaofComponent } from './demoforaof.component';

describe('DemoforaofComponent', () => {
  let component: DemoforaofComponent;
  let fixture: ComponentFixture<DemoforaofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoforaofComponent]
    });
    fixture = TestBed.createComponent(DemoforaofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
