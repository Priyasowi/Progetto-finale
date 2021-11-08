import { Component, OnInit } from '@angular/core';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  constructor(private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(response => console.log(response));
  }

}
