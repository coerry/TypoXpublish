import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AuthState]),
  ],
  providers: [
    AuthService, 
    AuthGuard
  ],
  exports: [
  ]
})
export class AuthenticationModule { }
