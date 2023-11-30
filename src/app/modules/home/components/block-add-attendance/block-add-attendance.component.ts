import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTitleComponent } from '../block-title/block-title.component';
import { AttendanceCardComponent } from '../attendance-card/attendance-card.component';

@Component({
  selector: 'app-block-add-attendance',
  standalone: true,
  imports: [CommonModule, BlockTitleComponent, AttendanceCardComponent],
  templateUrl: './block-add-attendance.component.html',
  styleUrl: './block-add-attendance.component.scss',
})
export class BlockAddAttendanceComponent {}
