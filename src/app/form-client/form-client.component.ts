import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { IClient } from '../interfaces/iclient';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  title: string = "";
  editClient!: IClient;


  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.title = 'Nuovo cliente';
        this.editClient = new Client()
      } else {
        this.title = 'Modifica cliente';
        this.clientService.getClient(element.id).subscribe(client => this.editClient = client);
      }
    })
  }
  saveClient() {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.clientService.createClient(this.editClient).subscribe(response => {
          console.log(response);
        })
      } else {
        this.clientService.updateClient(this.editClient).subscribe(response => {
          console.log(response);
          this.router.navigate(['client/list'])
        });
      }
    })

  }
}
