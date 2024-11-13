import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';  // Asegúrate de que el componente HomeComponent esté bien importado

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Lazy load para el módulo tienda y sus rutas
  {
    path: 'tienda',
    loadChildren: () => import('./components/tienda/tienda.module').then(m => m.TiendaModule)
  },


  // Lazy load para el módulo de autenticación
  {path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usa RouterModule.forRoot() para las rutas principales
  exports: [RouterModule]  // Asegúrate de exportar RouterModule
})
export class AppRoutingModule { }
