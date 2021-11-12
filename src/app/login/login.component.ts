import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardService } from '../services/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail!: string;
  loginPassword!: string;

  constructor(private router: Router,  private routeGuardService: RouteGuardService) { }

  ngOnInit(): void {
  }

  signin() {
    if(this.loginEmail === 'admin' && this.loginPassword === 'admin') {
      console.log('Login OK!');
      this.routeGuardService.setLogin();
      this.router.navigate(['client/list']);
    } else {
      console.log('email/passord errate!!!');
      this.loginEmail = '';
      this.loginPassword = '';
    }
  }

}
