import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTitleComponent } from '../block-title/block-title.component';
import { ShowroomCardComponent } from '../showroom-card/showroom-card.component';

@Component({
  selector: 'app-block-showroom',
  standalone: true,
  imports: [CommonModule, BlockTitleComponent, ShowroomCardComponent],
  templateUrl: './block-showroom.component.html',
  styleUrl: './block-showroom.component.scss',
})
export class BlockShowroomComponent {}
