import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { DaskboardComponent } from './daskboard/daskboard.component';

const myroute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"usersignup",
    component:UsersignupComponent
  },
  {
    path:"dashboard",
    component:DaskboardComponent
  },
  {
    path:"profileview",
    component:ViewprofileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersignupComponent,
    AdminloginComponent,
    UserloginComponent,
    ViewprofileComponent,
    DaskboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
