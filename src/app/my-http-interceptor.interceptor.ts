import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers.set("Authorization", 'Bearer ' + this.bearerAuth)
                    .set("X-TENANT-ID", this.tenantID)
      })
    
    
    return next.handle(myRequest);
  }
}
