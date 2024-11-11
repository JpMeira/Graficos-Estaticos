import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartLinhasPage } from './chart-linhas.page';

describe('ChartLinhasPage', () => {
  let component: ChartLinhasPage;
  let fixture: ComponentFixture<ChartLinhasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLinhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
