import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-busca',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './card-busca.html',
  styleUrl: './card-busca.scss',
})
export class CardBusca {}
