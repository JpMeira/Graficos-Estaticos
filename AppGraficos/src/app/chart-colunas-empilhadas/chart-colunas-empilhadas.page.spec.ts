import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartColunasEmpilhadasPage } from './chart-colunas-empilhadas.page';

describe('ChartColunasEmpilhadasPage', () => {
  let component: ChartColunasEmpilhadasPage;
  let fixture: ComponentFixture<ChartColunasEmpilhadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartColunasEmpilhadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
