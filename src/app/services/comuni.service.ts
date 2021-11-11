import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComuni } from '../interfaces/icomuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlAPIcomuni = environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,ASC';
  urlAPIcomune = environment.urlAPI + '/api/comuni';

  constructor(private http: HttpClient) {

  }

  getAllComuni() {
    return this.http.get<IComuni[]>(this.urlAPIcomuni,)
  }
  getComune(id: number) {
    return this.http.get(this.urlAPIcomune + '/' + id)
  }
}

