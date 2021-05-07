import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Setting } from '../Models/setting';
import { User } from '../Models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  prevurl="/admin";
  redirect:string="/admin";
  signupredirecturl="/login";
  authenticated:false;
  username:string="";
  user:User;
  token="";
  logged=false;
  authLoaded=false;

  signupstart:EventEmitter<any>=new EventEmitter<any>();
  signupfailed:EventEmitter<any>=new EventEmitter<any>();
  signupsucceeded:EventEmitter<any>=new EventEmitter<any>();
  authSet:EventEmitter<any>=new EventEmitter<any>();
  constructor(private router: Router,private client :ApiService) { 
    
    if (localStorage.getItem('access_token')){
      this.token=localStorage.getItem('access_token');
      this.client.updateToken(this.token);
      
        this.client.getWithAuth('auth/user').
        subscribe((res:any)=>{
          this.setUser(res.data);
          this.logged=true;
          this.authSet.emit(null);
          this.authLoaded=true;
        },
        (err)=>{
          this.authLoaded=true;
        });
    }else{
      this.authLoaded=true;
    }

  }

  setUser(res:any){
    this.user=new User();
    this.user.username=res.username;
    this.user.email=res.email;
    this.user.id=res.id;
    console.log(this.user);
  }

  canActivate(ext: ActivatedRouteSnapshot,ate: RouterStateSnapshot  ) {
    if(!this.logged){
      this.redirect=ate.url;
      this.router.navigate(['/login']);
    }
    return true;
  }

  login(email,password){
    this.signupstart.emit(null);
    this.client.post('login',{
      "email":email,
      "password":password
    }) 
   .subscribe((res:any)=>{
     console.log(res);
     if(res.status){
       localStorage.setItem('access_token',res.data.token);
       this.token=res.data.token;
       this.setUser(res.data);
       this.client.updateToken(this.token);
       this.logged=true;
       this.signupsucceeded.emit(res.data);
     }else{
       this.signupfailed.emit(res.error);
     }
   },
   (err)=>{
     console.log(err);
     this.signupfailed.emit(err);
   });
  }

  

 

  logOut(){
    localStorage.removeItem('access_token');
    this.logged=false;
    this.user=null;
  }
}
