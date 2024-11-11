import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartPizzaPageRoutingModule } from './chart-pizza-routing.module';

import { ChartPizzaPage } from './chart-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPizzaPageRoutingModule
  ],
  declarations: [ChartPizzaPage]
})
export class ChartPizzaPageModule {}
