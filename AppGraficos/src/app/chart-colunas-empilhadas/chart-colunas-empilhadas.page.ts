import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-colunas-empilhadas',
  templateUrl: './chart-colunas-empilhadas.page.html',
  styleUrls: ['./chart-colunas-empilhadas.page.scss'],
})
export class ChartColunasEmpilhadasPage implements AfterViewInit {
  chart: any;

  ngAfterViewInit() {
    this.createChart();  // Use ngAfterViewInit ao invés de ngOnInit para garantir que o DOM esteja pronto
  }

  createChart() {
    const ctx = document.getElementById('canvas-colunas-empilhadas') as HTMLCanvasElement;
    
    // Verifique se o canvas está disponível
    if (!ctx) {
      console.error('Canvas element not found');
      return;
    }

    // Criação do gráfico
    this.chart = new Chart(ctx, {
      type: 'bar',  // Tipo de gráfico (colunas empilhadas)
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Categoria 1',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }, {
          label: 'Categoria 2',
          data: [45, 39, 60, 71, 46, 35],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }
}
