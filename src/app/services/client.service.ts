import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IClient } from '../interfaces/iclient';
import { Icontent } from '../interfaces/icontent';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  urlAPI = environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,ASC';
  urlAPIDetail = environment.urlAPI + '/api/clienti/';
  urlAPINew = environment.urlAPI + '/api/clienti';

  constructor(private http: HttpClient) {

   }

  getAllClient() {
     return this.http.get<Icontent>(this.urlAPI, ); 
  }

  getClient(id: number) {
    return this.http.get<any>(this.urlAPIDetail + id);
  }

  deleteClient(item: IClient) {
    return this.http.delete(this.urlAPI + item.id);
  }

  createClient(obj: IClient) {
    return this.http.post<IClient>(this.urlAPINew, obj);
  }

  updateClient(item: IClient) {
    return this.http.put<IClient>(this.urlAPIDetail + item.id, item);
  
  }
}
