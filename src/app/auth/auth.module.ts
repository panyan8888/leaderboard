import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [AuthComponent, RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { }
