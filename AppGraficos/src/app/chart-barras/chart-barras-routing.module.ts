import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartBarrasPage } from './chart-barras.page';

const routes: Routes = [
  {
    path: '',
    component: ChartBarrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartBarrasPageRoutingModule {}
