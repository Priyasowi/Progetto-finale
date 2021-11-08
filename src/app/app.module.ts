import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ListaClientComponent } from './lista-client/lista-client.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { FooterComponent } from './footer/footer.component';
import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';
import { FattureComponent } from './fatture/fatture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaClientComponent,
    DetailClientComponent,
    NewClientComponent,
    FooterComponent,
    FattureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
