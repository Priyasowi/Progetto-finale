import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { IClient } from '../interfaces/iclient';
import { Comuni,  } from '../interfaces/icomuni';
import {  Province } from '../interfaces/iprovince';
import { ClientService } from '../services/client.service';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';
import { TipoClienteService } from '../services/tipo-cliente.service';
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  title: string = "";
  comuni: Comuni[] = [];
  province: Province[] = [];
  tipoCliente: string[] = [];

  editClient: IClient = {

    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
        id: 0,
        nome: "",
        provincia: {
          nome: "",
          sigla: "",
        }
      }
    },
    indirizzoSedeLegale: {
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
        id: 0,
        nome: "",
        provincia: {
          nome: "",
          sigla: "",
        }
      }
    },
    dataInserimento: "2019-11-16T00:13:30.626+00:00",
    dataUltimoContatto: "2021-04-10T04:27:14.239+00:00",
    fatturatoAnnuale: 0
  }
  

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private comuniService: ComuniService,
    private provinceService: ProvinceService,
    private tipoClienteService: TipoClienteService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(element => {

      if (element) {
        this.clientService.getClient(element.id).subscribe(res => this.editClient = res)
        this.title = "Modifica Cliente";
      }else {
         this.title = "Nuovo Cliente";
         this.editClient 
         this.clientService.updateClient(this.editClient).subscribe(response => this.editClient = response);
      }
      
    });
    this.getTipo();
    this.getComuni();
    this.getProvince()
  }
  getTipo(){
    this.tipoClienteService.getAllTipiClienti().subscribe(res => this.tipoCliente = res);
    console.log(this.tipoCliente);
  }
  getComuni(){
    this.comuniService.getAllComuni().subscribe(res => this.comuni = res.content);
    console.log(this.comuni);
  }
  getProvince(){
    this.provinceService.getAllProvince().subscribe(res => this.province = res.content);
    console.log(this.province);
  }
    //   this.route.params.subscribe(element => {
    //    if(!element.id) {
    //     
    //      this.clientService.createClient(this.editClient).subscribe(response => this.editClient = response);
    //    } else {
    //      this.title = "Modifica Cliente";
    //      
    //    }
    //  
    // this.getAllProvince()
    //   })


    // getAllProvince() {
    //  this.provinceService.getAllProvince().subscribe(response => this.province = response);
    // }
    //  {
    //   this.comuniService.getAllComuni().subscribe(response => this.comuni = response);
  


  


  saveClient() {

    this.route.params.subscribe(element => {
      if (!element.id) {
        this.clientService.createClient(this.editClient).subscribe(response => {
          console.log(response);
          this.router.navigate(['client/list']);
        })
      } else {
        this.clientService.updateClient(this.editClient).subscribe(response => {
          console.log(response);
          this.router.navigate(['client/list']);
        });
      }
    
    })
  }

}


