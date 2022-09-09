import { Injectable } from '@angular/core';
import { EngineData } from 'src/app/interfaces/Engines';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class EngineService {
  private apiUrl = 'http://localhost:3002/engines';

  constructor(private http: HttpClient, private MatSnackBar: MatSnackBar ) {}

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
    alert ('Backand tá funcionando não meu fii')
    return EMPTY;
  }

}
