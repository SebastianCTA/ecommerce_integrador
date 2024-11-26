import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public url: string;
  public isLoading$: Observable<boolean>;
  private isLoadingSubject: BehaviorSubject<boolean>;

  constructor(
    private _http: HttpClient
  ) {
    this.url = environment.api.url;
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  // Obtener todas las categorías
  allCategories(search = ''): Observable<any> {
    this.isLoadingSubject.next(true);
    return this._http.get(this.url + '/categories/list?search=' + search).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // Crear una categoría
  createCategorie(data: any): Observable<any> {
    this.isLoadingSubject.next(true);
    return this._http.post(this.url + '/categories/register', data).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // Actualizar una categoría
  updateCategorie(data: any): Observable<any> {
    this.isLoadingSubject.next(true);
    return this._http.put(this.url + '/categories/update', data).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // Eliminar una categoría
  deleteCategorie(categorie_id: string): Observable<any> {
    this.isLoadingSubject.next(true);
    return this._http.delete(this.url + '/categories/delete?_id=' + categorie_id).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}