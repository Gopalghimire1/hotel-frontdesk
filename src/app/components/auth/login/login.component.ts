import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";
  constructor(public auth:AuthService,private router:Router) { 
    this.auth.authSet.subscribe((data)=>{
      this.router.navigate([this.auth.redirect]);
    });
      this.auth.signupsucceeded.subscribe((Data)=>{
        this.router.navigate([this.auth.redirect]);
      });
  }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.email,this.password);
  }

  // validate():boolean{
  //   if()
  //   return true;
  // }
}
