import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartDispersaoPage } from './chart-dispersao.page';

const routes: Routes = [
  {
    path: '',
    component: ChartDispersaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartDispersaoPageRoutingModule {}
