import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  //private httpClient:HttpClient;
  constructor(private httpClient:HttpClient) { 

  }

  public sendToServer(url:string,payloads:any):Observable<any>{
      var headerParms:HttpHeaders = new HttpHeaders();
      headerParms.append('Content-Type','application/json');
      return this.httpClient.post(url,payloads,{headers:headerParms});
  }
}
