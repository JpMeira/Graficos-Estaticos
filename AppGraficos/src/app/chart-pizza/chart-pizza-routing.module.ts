import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartPizzaPage } from './chart-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: ChartPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartPizzaPageRoutingModule {}
