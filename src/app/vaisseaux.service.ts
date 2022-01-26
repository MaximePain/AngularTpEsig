import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Vaisseau } from './models/Vaisseau';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VaisseauResult } from './models/VaisseauResult';

@Injectable({
  providedIn: 'root',
})
export class VaisseauxService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private vaisseauxUrl = 'https://swapi.dev/api/vehicles';
  constructor(private http: HttpClient) { }

  getVaisseaux(): Observable<VaisseauResult>{
    return this.http.get<VaisseauResult>(this.vaisseauxUrl);
  }

}
