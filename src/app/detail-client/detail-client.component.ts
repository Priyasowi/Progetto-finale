import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from '../interfaces/iclient';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  detailClient!: IClient;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(client => {
      if(client.id) {
        this.clientService.getClient(client.id).subscribe(res => this.detailClient = res);
      }
    });
  }

}
