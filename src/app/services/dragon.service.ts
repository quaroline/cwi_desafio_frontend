import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Dragon } from '../models/dragon';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  getDragons(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>(`${this.baseUrl}`).pipe(catchError(this.serviceError));
  }
  
  getDragonById(id: number): Observable<Dragon> {
    return this.http.get<Dragon>(`${this.baseUrl}${id}`).pipe(catchError(this.serviceError));
  }

  addDragon(dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(`${this.baseUrl}`, dragon).pipe(catchError(this.serviceError));
  }

  deleteDragon(id: number): Observable<Dragon> {
    return this.http.delete<Dragon>(`${this.baseUrl}${id}`).pipe(catchError(this.serviceError));
  }

  editDragon(id: number, dragon: Dragon): Observable<Dragon> {
    return this.http.put<Dragon>(`${this.baseUrl}${id}`, dragon).pipe(catchError(this.serviceError));
  }

  private serviceError(response: Response | any) {
    let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === 'Unknown Error' || response.error == null) {
                customError.push('Unknown Error');
                return throwError({ error: { errors: [customError] } });
            }
        }
        
        return throwError(response);
  }
}