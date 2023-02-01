import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serios } from './serios';
@Injectable({
  providedIn: 'root'
})
export class SeriosService {
  private url: string="http://127.0.0.1:8000/serios/"
  constructor(private http:HttpClient) {  }
  getAll():Observable<Serios[]>{
    return this.http.get<Serios[]>(this.url);
  }
  //aqui pongo algo para cambiar
  create(serios:Serios):Observable<Serios>{
    return this.http.post<Serios>(this.url,serios);
  }
}
  