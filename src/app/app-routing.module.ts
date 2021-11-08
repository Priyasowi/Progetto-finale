import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FattureComponent } from './fatture/fatture.component';
import { ListaClientComponent } from './lista-client/lista-client.component';
import { NewClientComponent } from './new-client/new-client.component';

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
    path: 'client/new',
    component: NewClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
