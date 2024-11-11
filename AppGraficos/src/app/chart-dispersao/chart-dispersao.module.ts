import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartDispersaoPageRoutingModule } from './chart-dispersao-routing.module';

import { ChartDispersaoPage } from './chart-dispersao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartDispersaoPageRoutingModule
  ],
  declarations: [ChartDispersaoPage]
})
export class ChartDispersaoPageModule {}
