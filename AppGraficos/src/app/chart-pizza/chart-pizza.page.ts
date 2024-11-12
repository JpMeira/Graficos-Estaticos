import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-pizza',
  templateUrl: './chart-pizza.page.html',
  styleUrls: ['./chart-pizza.page.scss'], 
})
export class ChartPizzaPage implements OnInit {
  chart: any;
  
  // Variáveis para armazenar os valores dos produtos
  produtoA: number = 300;
  produtoB: number = 50;
  produtoC: number = 100;

  ngOnInit() {
    // Registra os componentes necessários
    Chart.register(...registerables);
    this.createChart(); // Cria o gráfico inicialmente com valores padrão
  }

  createChart() {
    const ctx = document.getElementById('canvas-pizza') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Produto A', 'Produto B', 'Produto C'],
        datasets: [{
          data: [this.produtoA, this.produtoB, this.produtoC],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // Função chamada ao enviar o formulário
  updateChart() {
    // Atualiza os dados com base nos inputs do usuário
    this.chart.data.datasets[0].data = [this.produtoA, this.produtoB, this.produtoC];
    
    // Atualiza o gráfico para refletir as mudanças
    this.chart.update();
  }
}
