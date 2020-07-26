import { Injectable } from '@angular/core';
import { IReceipe } from './receipes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  url: string = 'api/data.json';
  constructor(private http: HttpClient) { }
  getDetails(): Observable<IReceipe[]> {
    return this.http.get<IReceipe[]>(this.url).pipe(
      tap(data => console.log(JSON.stringify(data)),
        catchError(this.errorHandler)
      )
    );
  }
  getData(id: number): Observable<IReceipe | undefined> {
    return this.getDetails()
      .pipe(
        map((products: IReceipe[]) => products.find(p => p.id === id))
      );
  }
  errorHandler(err: HttpErrorResponse): (e: any) => void {
    throw new Error(err.error.message);
  }
}
