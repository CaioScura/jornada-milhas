import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Container } from '../container/container';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [MatToolbar, Container, MatButtonModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // os ícones precisam ser propriedades da classe para o template conseguir usá-los
  protected readonly faWhatsapp = faWhatsapp;
  protected readonly faInstagram = faInstagram;
  protected readonly faDiscord = faDiscord;
}
