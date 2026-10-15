import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  //passar os valores de imagens como input para o componente, para ser reutilizável
  @Input() src: string = '';
  @Input() alt: string = '';
}
