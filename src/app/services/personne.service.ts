import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personne } from '../models/personne';
import { Constantes } from '../Utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  constructor(private http: HttpClient) {} // Injecting HttpClient module

  public getAllPersonneFromServer(): Observable<Personne[]> {
    return this.http.get<Personne[]>('http://localhost:8080/api/personnes').pipe(
      map((data: Personne[]) => {
        return data as Personne[];
      })
    );
  }
}