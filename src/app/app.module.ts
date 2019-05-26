import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './authentication/guards/auth.guard';
import { AuthService } from './authentication/services/auth.service';
import { HeaderComponent } from './navigation/header/header.component';

var firebase = {
  apiKey: "AIzaSyD5kytDwmZmNqQosvsDgsWs_46l4sGYY5E",
  authDomain: "typox-3860f.firebaseapp.com",
  databaseURL: "https://typox-3860f.firebaseio.com",
  projectId: "typox-3860f",
  storageBucket: "typox-3860f.appspot.com",
  messagingSenderId: "432449450204",
  appId: "1:432449450204:web:558396ed1e89bcb0"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
