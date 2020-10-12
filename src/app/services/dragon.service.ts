import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dragon } from '../models/dragon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  getDragons(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>(`${this.baseUrl}`);
  }
  
  getDragonById(id: number): Observable<Dragon> {
    return this.http.get<Dragon>(`${this.baseUrl}${id}`);
  }

  addDragon(dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(`${this.baseUrl}`, dragon);
  }

  deleteDragon(id: number): Observable<Dragon> {
    console.log(`${this.baseUrl}${id}`)
    return this.http.delete<Dragon>(`${this.baseUrl}${id}`);
  }

  editDragon(id: number, dragon: Dragon): Observable<Dragon> {
    return this.http.put<Dragon>(`${this.baseUrl}${id}`, dragon);
  }
}