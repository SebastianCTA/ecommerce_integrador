import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { ProductosComponent } from './productos/productos.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ProductosComponent,
    CategoriesComponent,
    FooterComponent,
    DashboardComponent,
    EstadisticaComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    FormsModule,
    
  ]
})
export class TiendaModule { }
