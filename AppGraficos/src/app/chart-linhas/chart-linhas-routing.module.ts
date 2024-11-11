import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartLinhasPage } from './chart-linhas.page';

const routes: Routes = [
  {
    path: '',
    component: ChartLinhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartLinhasPageRoutingModule {}
