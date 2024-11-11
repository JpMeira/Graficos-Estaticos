import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartAreasPage } from './chart-areas.page';

describe('ChartAreasPage', () => {
  let component: ChartAreasPage;
  let fixture: ComponentFixture<ChartAreasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
