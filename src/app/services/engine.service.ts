import { Injectable } from '@angular/core';
import { EngineData } from 'src/app/interfaces/Engines';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class EngineService {
  private apiUrl = 'https://order-helper.herokuapp.com/engines/';
  //private apiUrl = 'http://localhost:3333/engines';

  constructor(private http: HttpClient, private MatSnackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.MatSnackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']

    });
  }

  getAll(): Observable<EngineData[]> {
    return this.http.get<EngineData[]>(this.apiUrl);
  }

  create(engines: EngineData): Observable<EngineData> {
    return this.http.post<EngineData>(this.apiUrl, engines).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    alert('Backand tá funcionando não meu fii')
    return EMPTY;
  }

  read(): Observable<EngineData[]> {
    return this.http.get<EngineData[]>(this.apiUrl)
  }

  readById(id: string): Observable<EngineData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EngineData>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(engines: EngineData): Observable<EngineData> {
    const url = `${this.apiUrl}/${engines.id}`
    return this.http.put<EngineData>(url, engines).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
}

delete(id: string): Observable<EngineData> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<EngineData>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}
}
