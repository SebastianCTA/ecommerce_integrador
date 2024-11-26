import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../../services/categoria.service';


@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {
  categories: any[] = []; // Lista de categorías
  search: string = ''; // Filtro de búsqueda
  isLoading$: any = null; // Estado de carga
  constructor(
    private _serviceCategorie: CategoriesService, // Servicio para obtener categorías
  ) {}

  // Método para inicializar el componente
  ngOnInit(): void {
    this.isLoading$ = this._serviceCategorie.isLoading$; // Asignar estado de carga
    this.loadCategories(); // Cargar todas las categorías al iniciar
  }

  // Método para cargar todas las categorías, filtradas si es necesario
  loadCategories(): void {
    this._serviceCategorie.allCategories(this.search).subscribe((resp: any) => {
      this.categories = resp.categories; // Asignar las categorías al array
    });
  }

  // Método para refrescar la lista de categorías
  refreshCategories(): void {
    this.search = ''; // Limpiar el filtro de búsqueda
    this.loadCategories(); // Volver a cargar las categorías
  }

}