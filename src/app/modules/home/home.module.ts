import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutes, NgOptimizedImage],
})
export class HomeModule {}
