import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { RegisterComponent } from './authentication/components/register/register.component';
import { HeaderComponent } from './navigation/header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginGuard } from './authentication/guards/login.guard';

const routes: Routes = [
  {path: '', component: HeaderComponent, canActivate: [AuthGuard]},
  {path: 'test', component: HeaderComponent},
  {path: 'main', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
