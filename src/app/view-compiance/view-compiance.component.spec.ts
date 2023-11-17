import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompianceComponent } from './view-compiance.component';

describe('ViewCompianceComponent', () => {
  let component: ViewCompianceComponent;
  let fixture: ComponentFixture<ViewCompianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCompianceComponent]
    });
    fixture = TestBed.createComponent(ViewCompianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
