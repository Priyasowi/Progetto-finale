import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { IFatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-form-fattura',
  templateUrl: './form-fattura.component.html',
  styleUrls: ['./form-fattura.component.css']
})
export class FormFatturaComponent implements OnInit {

  title: string = ""
  editFattura! : IFatture ;
    
  


  constructor(private fattureService: FattureService ,private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
      this.route.params.subscribe(element => {
        if(!element.id){
      this.title = "Nuovo Cliente";
      this.editFattura = new Fattura()
      // this.fattureService.createFattura(this.editFattura).subscribe(response => this.editFattura = response);
    } else {
      this.title = 'Modifica';
      this.fattureService.getFattureById(element.id).subscribe(fattura => this.editFattura = fattura);
    }
    })
}
saveFattura(){
  this.route.params.subscribe(element => {
    if (!element.id) {
      this.fattureService.createFattura(this.editFattura).subscribe(response => {
        console.log(response),
          this.router.navigate(['client/list/client/fatture'])
      })
    } else {
      this.fattureService.updateFattura(this.editFattura).subscribe(response => {
        console.log(response),
          this.router.navigate(['client/list/client/fatture']);
      })
    }
  })

}
}

