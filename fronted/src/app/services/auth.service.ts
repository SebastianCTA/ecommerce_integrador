import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url;
  constructor(
    private _http: HttpClient
  ) {
    // this.url = GLOBAL.url;
    this.url = environment.api.url;
  }

}

