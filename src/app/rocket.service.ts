import { Injectable } from '@angular/core';
import { Rocket } from './model/rocket.model';
import { RocketType } from './model/rockettype';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeWrapper } from './model/typewrapper';
import { AuthService } from './auth.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RocketService {


  apiURL: string = 'http://localhost:8080/rockets/api';
  apiURLType: string = 'http://localhost:8080/rockets/type';

  constructor(private http: HttpClient) {
  }

  listeRockets(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(this.apiURL);
  }

  ajouterRocket(rock: Rocket): Observable<Rocket> {
    return this.http.post<Rocket>(this.apiURL, rock, httpOptions);

  }

  supprimerRocket(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterRocket(id: number): Observable<Rocket> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Rocket>(url);
  }

  updateRocket(r: Rocket) {
    return this.http.put<Rocket>(this.apiURL, r, httpOptions);
  }

  listeTypes(): Observable<TypeWrapper> {
    return this.http.get<TypeWrapper>(this.apiURLType);
  }

  rechercherParType(idType: number): Observable<Rocket[]> {
    const url = `${this.apiURL}/rocketsTy/${idType}`;
    return this.http.get<Rocket[]>(url);
  }

  rechercherParNom(nom: string): Observable<Rocket[]> {
    const url = `${this.apiURL}/rocksByName/${nom}`;
    return this.http.get<Rocket[]>(url);
  }

  ajouterType( type: RocketType):Observable<RocketType>{
    return this.http.post<RocketType>(this.apiURLType, type, httpOptions);
    }

}
