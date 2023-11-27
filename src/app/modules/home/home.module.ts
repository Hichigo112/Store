import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutes],
})
export class HomeModule {}
