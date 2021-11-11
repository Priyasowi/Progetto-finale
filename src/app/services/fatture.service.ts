import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contentf } from '../interfaces/contentf';
import { IFatture } from '../interfaces/ifatture';


@Injectable({
  providedIn: 'root'
})
export class FattureService {

  urlAPIFatture = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,ASC';
  urlAPIDetailf = environment.urlAPI + '/api/fatture';

  constructor(private http: HttpClient) { 

  }

  getAllFatture() {
    return this.http.get<Contentf>(this.urlAPIFatture, );
  }

  getFattureById(id : number) {
    return this.http.get(this.urlAPIDetailf + '/' + id)
  }

  deleteFattura(fattura : IFatture) {
    return this.http.delete(this.urlAPIFatture + fattura);
  }

  updateFattura(fattura : IFatture) {
    return this.http.put<IFatture>(this.urlAPIDetailf + fattura.id, fattura);
  }
}
