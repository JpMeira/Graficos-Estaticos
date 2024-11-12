import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';  // Importando 'registerables' para registrar todos os componentes necessários

@Component({
  selector: 'app-chart-dispersao',
  templateUrl: './chart-dispersao.page.html',
  styleUrls: ['./chart-dispersao.page.scss'],
})
export class ChartDispersaoPage implements OnInit {
  chart: any;

  ngOnInit() {
    // Registrando todos os componentes necessários do Chart.js
    Chart.register(...registerables);
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('canvas-dispersao') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'scatter',  // Tipo de gráfico (dispersão)
      data: {
        datasets: [{
          label: 'Vendas',
          data: [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }],
          backgroundColor: 'rgba(75, 192, 192, 1)'
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
