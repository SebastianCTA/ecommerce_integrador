import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public products: any[] = [];
  public load_categorias = true;
  public categorias: any[] = [];
  public load_productos = true;
/*
  public valoraciones: any[] = [];

  public id_usuario;
  public token: any;

  constructor(
    private _title: Title,
    private _userService: UserService,
    private _router: Router
  ) {

    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.id_usuario = localStorage.getItem('id_usuario') || sessionStorage.getItem('id_usuario');
  }
 */
/*   ngOnInit(): void {
    this.load_productos = true;
    this.load_categorias = true;
    this._title.setTitle('Agro+ | Inicio');

    this._userService.obtener_categorias().subscribe({
      next: (res) => {
        this.categorias = res.data;
        this.load_categorias = false;
      },
      error: (err) => {
        this.categorias = [];
        this.load_categorias = false;
      }
    });

    this._userService.obtener_productos().subscribe({
      next: (res) => {
        this.products = res.data;
        this.load_productos = false;
      },
      error: (err) => {
        this.products = [];
        this.load_productos = false;
      }
    });

    this._userService.obtener_comentarios_principales().subscribe({
      next: (res) => {
        this.valoraciones = res.data;

      },
      error: (err) => {
        this.valoraciones = [];
      }
    });
  }

  selectCategoria(id_categoria: string) {
    console.log("ID de la categoría seleccionada:", id_categoria); // Verifica el ID
    sessionStorage.setItem('id_categoria', id_categoria);
    this._router.navigate(['/producto']).then(success => {
      if (success) {
        console.log("Navegación exitosa a /producto");
      } else {
        console.log("Error en la navegación a /producto");
      }
    }).catch(error => {
      console.error("Error en la navegación:", error);
    });
  } */


}
