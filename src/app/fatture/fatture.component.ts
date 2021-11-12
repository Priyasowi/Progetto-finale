import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contentf } from '../interfaces/contentf';
import { IFatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';



@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

 fatture!: Contentf;

  constructor(private fattureService: FattureService,
     private router: Router,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
 
  this.fattureService.getAllFatture().subscribe(response => this.fatture = response);
  }
  removeClient(item : IFatture){

  }
  newFattura(){
    this.router.navigate(['fattura/new']);
  }
  
}
