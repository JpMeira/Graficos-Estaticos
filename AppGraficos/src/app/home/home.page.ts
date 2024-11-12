import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuVisible: boolean = false; // Controla a visibilidade do menu

  // Função para alternar a visibilidade do menu
  toggleMenu() {
    this.menuVisible = !this.menuVisible; // Alterna o estado do menu
  }
}
