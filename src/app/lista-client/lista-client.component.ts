import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-lista-client',
  templateUrl: './lista-client.component.html',
  styleUrls: ['./lista-client.component.css']
})
export class ListaClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(response => console.log(response));
  }

}
