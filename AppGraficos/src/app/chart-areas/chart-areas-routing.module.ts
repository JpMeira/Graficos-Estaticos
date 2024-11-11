import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartAreasPage } from './chart-areas.page';

const routes: Routes = [
  {
    path: '',
    component: ChartAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartAreasPageRoutingModule {}
