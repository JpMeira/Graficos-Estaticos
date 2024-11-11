import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartPizzaPage } from './chart-pizza.page';

describe('ChartPizzaPage', () => {
  let component: ChartPizzaPage;
  let fixture: ComponentFixture<ChartPizzaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
