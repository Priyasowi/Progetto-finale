import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contentf } from '../interfaces/contentf';


@Injectable({
  providedIn: 'root'
})
export class FattureService {

  urlAPIFatture = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,ASC';

  constructor(private http: HttpClient) { 

  }

  getAllFatture() {
    return this.http.get<Contentf>(this.urlAPIFatture, );
  }
}
