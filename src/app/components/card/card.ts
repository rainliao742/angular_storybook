import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardSize = 'large' | 'small';
export type CardVariant = 'default' | 'alt';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() size: CardSize = 'large';
  @Input() variant: CardVariant = 'default';
  @Input() title: string = 'Card Title';
  @Input() description: string = 'Card description text.';
  @Input() tag: string = '';
}
