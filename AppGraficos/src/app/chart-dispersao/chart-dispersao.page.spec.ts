import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartDispersaoPage } from './chart-dispersao.page';

describe('ChartDispersaoPage', () => {
  let component: ChartDispersaoPage;
  let fixture: ComponentFixture<ChartDispersaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDispersaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
