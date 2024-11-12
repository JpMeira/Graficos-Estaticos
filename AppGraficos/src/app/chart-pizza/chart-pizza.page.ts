import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; // Certifique-se de importar 'registerables'

@Component({
  selector: 'app-chart-pizza',
  templateUrl: './chart-pizza.page.html',
  styleUrls: ['./chart-pizza.page.scss'],  // Se não estiver usando SCSS, pode deixar em branco
})
export class ChartPizzaPage implements OnInit {
  chart: any;

  ngOnInit() {
    // Registra os componentes necessários
    Chart.register(...registerables);
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('canvas-pizza') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Produto A', 'Produto B', 'Produto C'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      },
      options: {
        responsive: true,  // Responsivo, permite que o gráfico se ajuste ao contêiner
        maintainAspectRatio: false,  // Deixa o gráfico livre para ser redimensionado com as dimensões do contêiner
      }
    });
  }
}
