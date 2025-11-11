import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controle-abastecimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './controle-abastecimento.component.html',
  styleUrls: ['./controle-abastecimento.component.css']
})
export class ControleAbastecimentoComponent {
  tipoCombustivel: string = '';
  valorLitro: number = 0;
  quantidadeLitros: number = 0;
  dataAbastecimento: string = '';
  valorTotal: number = 0;
  mostrarResumo: boolean = false;

  calcularTotal(): void {
    if (this.valorLitro > 0 && this.quantidadeLitros > 0 && this.tipoCombustivel && this.dataAbastecimento) {
      this.valorTotal = this.valorLitro * this.quantidadeLitros;
      this.mostrarResumo = true;
    } else {
      this.mostrarResumo = false;
      alert('Preencha todos os campos corretamente!');
    }
  }

  obterClasseCombustivel(): string {
    switch (this.tipoCombustivel) {
      case 'Gasolina': return 'gasolina';
      case 'Etanol': return 'etanol';
      case 'Diesel': return 'diesel';
      default: return '';
    }
  }
}
