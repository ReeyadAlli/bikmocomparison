import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsComparisonComponent } from './parts-comparison.component';

describe('PartsComparisonComponent', () => {
  let component: PartsComparisonComponent;
  let fixture: ComponentFixture<PartsComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
