import { Injectable } from '@angular/core';
import { PartData } from '../interfaces/Part';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private apiUrl = 'http://localhost:3002/parts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PartData[]> {
    return this.http.get<PartData[]>(this.apiUrl);
  }

}
