import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'chart-barras',
    loadChildren: () => import('./chart-barras/chart-barras.module').then( m => m.ChartBarrasPageModule)
  },
  {
    path: 'chart-linhas',
    loadChildren: () => import('./chart-linhas/chart-linhas.module').then( m => m.ChartLinhasPageModule)
  },
  {
    path: 'chart-pizza',
    loadChildren: () => import('./chart-pizza/chart-pizza.module').then( m => m.ChartPizzaPageModule)
  },
  {
    path: 'chart-dispersao',
    loadChildren: () => import('./chart-dispersao/chart-dispersao.module').then( m => m.ChartDispersaoPageModule)
  },
  {
    path: 'chart-areas',
    loadChildren: () => import('./chart-areas/chart-areas.module').then( m => m.ChartAreasPageModule)
  },
  {
    path: 'chart-colunas-empilhadas',
    loadChildren: () => import('./chart-colunas-empilhadas/chart-colunas-empilhadas.module').then( m => m.ChartColunasEmpilhadasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
