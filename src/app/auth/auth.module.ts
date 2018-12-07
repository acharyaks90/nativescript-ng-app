import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    NativeScriptCommonModule,
    AuthRoutingModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
