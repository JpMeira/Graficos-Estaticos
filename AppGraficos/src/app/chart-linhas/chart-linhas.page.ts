import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';  // Importe o 'registerables'

@Component({
  selector: 'app-chart-linhas',
  templateUrl: './chart-linhas.page.html',
  styleUrls: ['./chart-linhas.page.scss'],
})
export class ChartLinhasPage implements OnInit {
  chart: any;

  ngOnInit() {
    // Registre todos os componentes necessários para o gráfico
    Chart.register(...registerables);
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('canvas-linhas') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',  // Tipo de gráfico (linhas)
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Vendas',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
