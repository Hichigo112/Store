import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutes } from './home.routes';
import { StockComponent } from './components/stock/stock.component';
import { BlockStockComponent } from './components/block-stock/block-stock.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutes,
    NgOptimizedImage,
    StockComponent,
    BlockStockComponent,
  ],
})
export class HomeModule {}
