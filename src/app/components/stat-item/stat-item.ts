import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-item',
  standalone: true,
  templateUrl: './stat-item.html',
  styleUrl: './stat-item.scss',
})
export class StatItemComponent {
  @Input() value: string = '0';
  @Input() label: string = 'Metric';
}
