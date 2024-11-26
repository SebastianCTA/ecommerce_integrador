import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { EliminarCategoriaComponent } from './eliminar-categoria/eliminar-categoria.component';
import { ListCategorieComponent } from './list-categoria/list-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent,
    AgregarCategoriaComponent,
    EditCategoriaComponent,
    EliminarCategoriaComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CategoriesModule { }
