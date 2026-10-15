import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { Container } from '../../components/container/container';
import { CardBusca } from '../../components/card-busca/card-busca';

@Component({
  selector: 'app-home',
  imports: [Banner, Container, CardBusca],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
