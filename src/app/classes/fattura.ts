export class Fattura {

   data: string;
   numero: number;
   anno: number;
   importo: number;
   stato: {
       id?: number;
       nome: string;
   }
   cliente: {
       id?: number;
   }
   constructor() {
       this.data = '';
       this.numero = 0;
       this.anno = 0;
       this.importo = 0;
       this.stato = {
           nome: ''
       }
       this.cliente={
           
       }
   }

}
