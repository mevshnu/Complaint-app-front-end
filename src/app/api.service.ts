import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   loginuser=(data:any)=>
   {
    return this.http.post("http://localhost:8080/userlogin",data)
   }
   fuseradd=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userreg",dataToSend)
  }
  getprofiledetails=(dat:any)=>
  {
    return this.http.post("http://localhost:8080/getUserById",dat)
  }

}
