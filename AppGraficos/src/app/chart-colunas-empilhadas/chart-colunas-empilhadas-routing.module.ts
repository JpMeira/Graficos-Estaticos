import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartColunasEmpilhadasPage } from './chart-colunas-empilhadas.page';

const routes: Routes = [
  {
    path: '',
    component: ChartColunasEmpilhadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartColunasEmpilhadasPageRoutingModule {}
