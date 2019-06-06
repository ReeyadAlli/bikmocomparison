import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBikeComparisonComponent } from './new-bike-comparison.component';

describe('NewBikeComparisonComponent', () => {
  let component: NewBikeComparisonComponent;
  let fixture: ComponentFixture<NewBikeComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBikeComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBikeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
