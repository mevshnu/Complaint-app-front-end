import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  adminname=""
  password=""
  constructor(private routed:Router){}
  readlogin=()=>
  {
  let data4:any={"adminname":this.adminname,"password":this.password}
  console.log(data4)
  if( this.adminname == "admin" && this.password=="12345")
  {
  this.routed.navigate(["/dashboard"])
  }
  else
  {
    alert("invalid login ")
  }
  }
  

}
