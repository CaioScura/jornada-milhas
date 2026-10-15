import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimentos',
  imports: [MatCard, MatCardContent],
  templateUrl: './card-depoimentos.html',
  styleUrl: './card-depoimentos.scss',
})
export class CardDepoimentos {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  nome: string = 'Mariana Faustino'
}
