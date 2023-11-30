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
export class BlockStockComponent {}
