import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { Container } from '../../components/container/container';
import { CardBusca } from '../../components/card-busca/card-busca';
import { CardDepoimentos } from '../../components/card-depoimentos/card-depoimentos';
import { FormBusca } from '../../components/form-busca/form-busca';

@Component({
  selector: 'app-home',
  imports: [Banner, Container, CardBusca, CardDepoimentos, FormBusca],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
