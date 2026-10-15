import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { Container } from '../../components/container/container';

@Component({
  selector: 'app-home',
  imports: [Banner, Container],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
