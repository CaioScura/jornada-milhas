import { Component, inject } from '@angular/core';
import { Card } from '../card/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';


@Component({
  selector: 'app-form-busca',
  imports: [
    Card,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
],
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {
  readonly dialog = inject(MatDialog);

  openDialog() {
    // o dialog do Material 3 limita a largura em 560px por padrão
    this.dialog.open(Modal, {
      width: '540px',
      maxWidth: '90vw',
    });
  }
}
