import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartLinhasPageRoutingModule } from './chart-linhas-routing.module';

import { ChartLinhasPage } from './chart-linhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartLinhasPageRoutingModule
  ],
  declarations: [ChartLinhasPage]
})
export class ChartLinhasPageModule {}
