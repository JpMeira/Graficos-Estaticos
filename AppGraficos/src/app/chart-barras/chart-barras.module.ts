import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartBarrasPageRoutingModule } from './chart-barras-routing.module';
import { ChartBarrasPage } from './chart-barras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartBarrasPageRoutingModule
  ],
  declarations: [ChartBarrasPage]
})
export class ChartBarrasPageModule {}
