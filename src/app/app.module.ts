import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ListaClientComponent } from './lista-client/lista-client.component';
import { DetailClientComponent } from './detail-client/detail-client.component';

import { FooterComponent } from './footer/footer.component';
import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';
import { FattureComponent } from './fatture/fatture.component';
import { FormsModule } from '@angular/forms';
import { FormClientComponent } from './form-client/form-client.component';
import { LoginComponent } from './login/login.component';
import { FormFatturaComponent } from './form-fattura/form-fattura.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaClientComponent,
    DetailClientComponent,
   FormClientComponent,
    FooterComponent,
    FattureComponent,
    LoginComponent,
    FormFatturaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
