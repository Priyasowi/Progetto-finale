import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  urlAPI = environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,ASC';
  // bearerAuth = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTY2OSwiZXhwIjoxNjM3MjQzNjY5fQ.WnN6_vBxZYhnpBI4dr9BuXkmyt-fmiZPApmhO0sL6ArsSsKjDzIpMLUSfHzOiyKZxeqbZkhJAwA3essPSFEX_A";
  // tenantID = 'fe_0421';
  // headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    // this.headers = this.headers.set("Authorization", "Bearer " + this.bearerAuth).set("X-TENANT-ID", this.tenantID);
   }

  getAllClient() {
     return this.http.get(this.urlAPI, ); //{headers: this.headers}
  }
}
