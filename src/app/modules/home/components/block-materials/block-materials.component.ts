import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTitleComponent } from '../block-title/block-title.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-block-materials',
  standalone: true,
  imports: [CommonModule, BlockTitleComponent, ProjectCardComponent],
  templateUrl: './block-materials.component.html',
  styleUrl: './block-materials.component.scss',
})
export class BlockMaterialsComponent {}
