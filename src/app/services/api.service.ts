import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:HttpHeaders;
  authheaders:HttpHeaders;
  token:"";
  url="http://c69792c177e8.ngrok.io/api/";
  constructor(public client:HttpClient) {
    this.headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('accept', 'application/json')
    .append('xpsu', '123456');
    console.log(this.headers);
    this.authheaders=this.headers.append("Authorization","Bearer "+this.token);
   }

   updateToken(_token){
    this.token=_token;
    this.authheaders=this.headers.append("Authorization","Bearer "+this.token);
    console.log("auth header set",this.authheaders);
  }


  get(param){
    return this.client.get(this.url+param,{headers:this.headers});
  }
  post(param,data){
    return this.client.post(this.url+param,data,{headers:this.headers});

  }

  postFile(param,data:FormData){
    let fileheaders = new HttpHeaders()
    .append('Content-Type', 'multipart/form-data')
    .append('accept', 'application/json')
    .append('xpsu', '123456');
    return this.client.post(this.url+param,data,{headers:fileheaders});

  }

  postFileWithAuth(param,data:FormData){
    let fileheaders = new HttpHeaders()
    // .append('Content-Type', 'multipart/form-data')
    // .append('accept', 'application/json')
    .append('xpsu', '123456')
    .append("Authorization","Bearer "+this.token);
    return this.client.post(this.url+param,data,{headers:fileheaders});

  }

  getWithAuth(pram){

    return this.client.get(this.url+pram,{headers:this.authheaders});
  }
  postWithAuth(pram,data){
    return this.client.post(this.url+pram,data,{headers:this.authheaders});

  }
}
