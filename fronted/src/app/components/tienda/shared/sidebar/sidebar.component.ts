import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() currentView: string = ''; // Recibe la vista actual
  @Output() viewChange = new EventEmitter<string>();

  changeView(view: string) {
    // Emitir el evento con el valor de la vista
    this.viewChange.emit(view);
  }
}
