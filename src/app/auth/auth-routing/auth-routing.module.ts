import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from '~/app/login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
 
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];


@NgModule({
  declarations: [],
  imports: [
    NativeScriptRouterModule.forChild(routes)
  ],
  exports:[
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthRoutingModule { }
