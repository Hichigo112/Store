import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-showroom-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './showroom-card.component.html',
  styleUrl: './showroom-card.component.scss',
})
export class ShowroomCardComponent {}
