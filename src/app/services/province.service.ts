import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProvince } from '../interfaces/iprovince';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlAPIprovince = environment.urlAPI + '/api/province?page=0&size=20&sort=id,ASC';
  urlAPIprovincia = environment.urlAPI + '/api/province'

  constructor(private http: HttpClient) {

   }

   getAllProvince() {
     return this.http.get<IProvince>(this.urlAPIprovince, );
   }
   getProvincia(id : number) {
    return this.http.get(this.urlAPIprovincia +'/' +id)
   }
}
