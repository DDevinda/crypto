import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuySellPage } from './buy-sell.page';

const routes: Routes = [
  {
    path: '',
    component: BuySellPage,
    children: [
      {
        path:'buy',
        loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
      },
      {
        path: 'sell',
        loadChildren: () => import('./sell/sell.module').then( m => m.SellPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuySellPageRoutingModule {}
