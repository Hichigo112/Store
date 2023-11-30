import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlockTitleComponent } from '../block-title/block-title.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-block-stock',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    BlockTitleComponent,
    CardComponent,
  ],
  templateUrl: './block-stock.component.html',
  styleUrl: './block-stock.component.scss',
})
export class BlockStockComponent {
  mockArrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
