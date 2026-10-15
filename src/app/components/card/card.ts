import { Component, Input } from '@angular/core';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  //valor padrao primary, caso nao passe nada sera primary, se passar secondary sera secondary
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
