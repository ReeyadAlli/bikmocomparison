import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComparisonComponent } from './service-comparison.component';

describe('ServiceComparisonComponent', () => {
  let component: ServiceComparisonComponent;
  let fixture: ComponentFixture<ServiceComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
