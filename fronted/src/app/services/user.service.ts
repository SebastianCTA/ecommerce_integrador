import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;
  constructor(
    private _http: HttpClient
  ) {
    // this.url = GLOBAL.url;
    this.url = environment.api.url;
  }

   // Producto
 insertar_producto(data: any): Observable<any> {
  return this._http.post(this.url + 'producto/insertar', data);
}


  // Rutas para productos y categorías
  obtener_categorias(): Observable<any> {
    return this._http.post(this.url + 'categoria/obtener-categorias', { data: true });
  }

  obtener_productos(): Observable<any> {
    return this._http.post(this.url + 'producto/obtener-productos', { data: true });
  }

  obtener_comentarios_principales(): Observable<any> {
    return this._http.post(this.url + 'comentario/principales', { data: true });
  }

  sendPasswordRecoveryEmail(email: string): Observable<any> {
    return this._http.post(this.url +'users/forgot-password', { email });
  }
}



