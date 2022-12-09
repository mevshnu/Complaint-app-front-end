import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  constructor(private route:Router,private api: ApiService){}


  name=""
  phone=""
  email=""
  address=""
  username=""
  password=""

readValues=()=>
{
  let data: any = {
    "name": this.name,
    "address": this.address,
    "phone": this.phone,
    "email": this.email,
    "username": this.username,
    "password": this.password
  }
  this.api.fuseradd(data).subscribe(
    (response: any) => {
      this.name = ""
      this.address = ""
      this.phone = ""
      this.email = ""
      this.username = ""
      this.password = ""
      if (response.status == "success") {
        alert(response.message)
        this.route.navigate(["/userlogin"])
      } else {
        alert(response.message)
      }
    }
  )
}
}