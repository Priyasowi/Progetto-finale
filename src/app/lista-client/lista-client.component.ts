import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 ) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(response => this.client = response);
  
  }

  detailClient(item : IClient) {
    this.router.navigate(['client', item.id, 'detail']);
  }


  removeClient(item: IClient) {
    this.clientService.deleteClient(item).subscribe(response => {
      console.log(response);
      this.clientService.getAllClient().subscribe(response => this.client = response);
    })
  }

  newClient(){
    this.router.navigate(['client/new']);
  }
  selectClient(item: IClient) {
    this.router.navigate(['client', item.id, 'edit']);
  }
}
