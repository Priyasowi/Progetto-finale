import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITipoCliente } from '../interfaces/itipo-cliente';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {

  urlAPITipiCliente = environment.urlAPI + '/api/clienti/tipicliente'

  constructor(private http : HttpClient) {

   }

   getAllTipiClienti() {
     return this.http.get<ITipoCliente>(this.urlAPITipiCliente,)
   }
}
