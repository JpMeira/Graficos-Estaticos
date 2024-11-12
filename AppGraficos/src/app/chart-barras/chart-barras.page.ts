import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, BarElement, CategoryScale, Title, Tooltip, Legend, BarController } from 'chart.js';

// Registre as escalas, elementos, controladores e outros componentes necessários
Chart.register(
  LinearScale,   // Escala linear para o eixo Y
  BarElement,    // Elemento de barra
  CategoryScale, // Escala de categorias para o eixo X
  Title,         // Título do gráfico
  Tooltip,       // Tooltips
  Legend,        // Legenda
  BarController  // Controlador para o gráfico de barras
);

@Component({
  selector: 'app-chart-barras',
  templateUrl: './chart-barras.page.html',
  styleUrls: ['./chart-barras.page.scss'],
})
export class ChartBarrasPage implements OnInit {
  chart: any;
  codeSnippet!: string;  // Inicializado no ngOnInit

  ngOnInit() {
    this.createChart();
    this.codeSnippet = `const chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Vendas',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true  // Configura o eixo Y para começar no zero
          }
        }
      }
    });`;
  }

  createChart() {
    // Instancia o gráfico de barras
    this.chart = new Chart('canvas', {
      type: 'bar', // Tipo de gráfico (barra)
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Rótulos (meses)
        datasets: [{
          label: 'Vendas',
          data: [65, 59, 80, 81, 56, 55], // Dados do gráfico
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Cor de fundo das barras
          borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
          borderWidth: 1 // Largura da borda das barras
        }]
      },
      options: {
        responsive: true, // Responsividade
        scales: {
          y: {
            beginAtZero: true  // Configura o eixo Y para começar no zero
          }
        }
      }
    });
  }
}
