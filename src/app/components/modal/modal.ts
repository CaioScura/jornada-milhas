import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BotaoControle } from '../botao-controle/botao-controle';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-modal',
  imports: [MatDialogModule, MatButtonModule, BotaoControle, MatChipsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {}
