import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-block-title',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './block-title.component.html',
  styleUrl: './block-title.component.scss',
})
export class BlockTitleComponent {
  @Input() text = '';
  @Input() textLink = '';
  @Input() route = '';
}
