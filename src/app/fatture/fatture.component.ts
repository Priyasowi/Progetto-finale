import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contentf } from '../interfaces/contentf';
import { FattureService } from '../services/fatture.service';



@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

 fattura!: Contentf;

  constructor(private fattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
   this.fattureService.getAllFatture().subscribe(response => this.fattura = response);
  }
 
}
