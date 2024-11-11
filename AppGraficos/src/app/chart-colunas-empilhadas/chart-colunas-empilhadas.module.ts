import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartColunasEmpilhadasPageRoutingModule } from './chart-colunas-empilhadas-routing.module';

import { ChartColunasEmpilhadasPage } from './chart-colunas-empilhadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartColunasEmpilhadasPageRoutingModule
  ],
  declarations: [ChartColunasEmpilhadasPage]
})
export class ChartColunasEmpilhadasPageModule {}
