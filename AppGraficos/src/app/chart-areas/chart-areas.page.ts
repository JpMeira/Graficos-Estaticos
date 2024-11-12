import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-areas',
  templateUrl: './chart-areas.page.html',
  styleUrls: ['./chart-areas.page.scss'],
})
export class ChartAreasPage implements OnInit {
  chart: any;

  ngOnInit() {
    
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('canvas-areas') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',  // Usando tipo 'line' para área
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Vendas',
          data: [65, 59, 80, 81, 56, 55],
          fill: true,  // Preenchendo a área abaixo da linha
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
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
