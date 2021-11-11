import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { FattureComponent } from './fatture/fatture.component';
import { FormClientComponent } from './form-client/form-client.component';
import { ListaClientComponent } from './lista-client/lista-client.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [
  {
    path: 'client/list',
    component: ListaClientComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'client/fatture',
    component: FattureComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'client/detail/:id',
    component: DetailClientComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'client/:id/edit',
    component: FormClientComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'client/new',
    component: FormClientComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
