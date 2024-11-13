import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public currentView: string = 'estadistica'; // Estado inicial
  selectedView: string = 'estadística'; // Vista inicial seleccionada

  changeView(view: string) {
    this.currentView = view;
  }
  onViewChange(view: string) {
    this.selectedView = view; // Actualizar la vista seleccionada cuando se recibe el evento
  }
}
