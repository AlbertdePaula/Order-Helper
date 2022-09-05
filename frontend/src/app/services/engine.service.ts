import { Injectable } from '@angular/core';
import { EngineData } from 'src/app/interfaces/Engines';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EngineService {
  private apiUrl = 'http://localhost:3002/motors';

  constructor(private http: HttpClient) { }

  getAll(): Observable<EngineData[]> {
    return this.http.get<EngineData[]>(this.apiUrl);
  }
}
