import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SliderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
