import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-controle',
  imports: [MatIconModule],
  templateUrl: './botao-controle.html',
  styleUrl: './botao-controle.scss',
})
export class BotaoControle {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";

  // avisa o componente pai que o botão foi clicado
  @Output() acionado = new EventEmitter<void>();
}
