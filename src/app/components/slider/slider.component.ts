import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  mockImagesArray = [
    'assets/images/screen1.jpg',
    'assets/images/screen2.jpg',
    'assets/images/screen3.jpg',
    'assets/images/screen4.jpg',
    'assets/images/screen5.jpg',
    'assets/images/screen6.jpg',
    'assets/images/screen7.jpg',
  ];
}
