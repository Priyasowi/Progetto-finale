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
  urlAPIDetail = environment.urlAPI + '/api/clienti';
  urlAPITipiCliente = environment.urlAPI + '/api/clienti/tipicliente'
  

  constructor(private http: HttpClient) {

   }

  getAllClient() {
     return this.http.get<Icontent>(this.urlAPI, ); 
  }
  getAllTipiClienti() {
    return this.http.get<string>(this.urlAPITipiCliente,)
  }
  getClient(id: any) {
    return this.http.get<any>(this.urlAPIDetail+ '/'+ id);
  }

  deleteClient(clienti: IClient) {
    return this.http.delete(this.urlAPI + clienti.id);
  }

  createClient(clienti: IClient) {
    return this.http.post<IClient>(this.urlAPIDetail, clienti);
  }

  updateClient(clienti: IClient) {
    return this.http.put<IClient>(this.urlAPIDetail + clienti.id, clienti);
  
  }
}
