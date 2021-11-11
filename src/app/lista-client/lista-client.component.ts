import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from '../interfaces/iclient';
import { Icontent } from '../interfaces/icontent';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-lista-client',
  templateUrl: './lista-client.component.html',
  styleUrls: ['./lista-client.component.css']
})
export class ListaClientComponent implements OnInit {

  client!: Icontent;

  constructor(
  private clientService: ClientService,
   private router: Router,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(response => this.client = response);
  
  }

  detailClient(clienti : IClient) {
    this.router.navigate(['client/detail', clienti.id, ]);
  }
  removeClient(clienti: IClient) {
    this.clientService.deleteClient(clienti).subscribe(response => {
      console.log(response);
      this.clientService.getAllClient().subscribe(response => this.client = response);
    })
  }

  newClient(){
    this.router.navigate(['client/new']);
  }
  selectClient(clienti: IClient) {
    this.router.navigate(['client', clienti.id, 'edit']);
  }
}
