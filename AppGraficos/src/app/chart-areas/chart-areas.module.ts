import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartAreasPageRoutingModule } from './chart-areas-routing.module';

import { ChartAreasPage } from './chart-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartAreasPageRoutingModule
  ],
  declarations: [ChartAreasPage]
})
export class ChartAreasPageModule {}
