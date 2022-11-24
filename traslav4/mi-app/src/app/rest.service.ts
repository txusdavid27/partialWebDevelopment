import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _httpClient: HttpClient) {}

  getFotos(){
    return this._httpClient.get<Response>("https://jsonplaceholder.typicode.com/albums/1/photos").pipe(catchError(this.fallo));
  }

  fallo(_err: HttpErrorResponse){
    return throwError(()=> new Error(_err.message));
  }
}
