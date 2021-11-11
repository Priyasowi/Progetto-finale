import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { FattureComponent } from './fatture/fatture.component';
import { FormClientComponent } from './form-client/form-client.component';
import { ListaClientComponent } from './lista-client/lista-client.component';


const routes: Routes = [
  {
    path: 'client/list',
    component: ListaClientComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client/list'
  },
  {
    path: 'client/fatture',
    component: FattureComponent
  },
  {
    path: 'client/detail/:id',
    component: DetailClientComponent
  },
  {
    path: 'client/:id/edit',
    component: FormClientComponent
  },
  {
    path: 'client/new',
    component: FormClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
