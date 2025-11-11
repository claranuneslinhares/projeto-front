import { Component, signal } from '@angular/core';
import { ControleAbastecimentoComponent } from './controle-abastecimento/controle-abastecimento.component';

@Component({
  selector: 'app-root',
  imports: [ ControleAbastecimentoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-front');
}
