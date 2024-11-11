import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartBarrasPage } from './chart-barras.page';

describe('ChartBarrasPage', () => {
  let component: ChartBarrasPage;
  let fixture: ComponentFixture<ChartBarrasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
