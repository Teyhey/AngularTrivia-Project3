import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PreferencesComponent } from './views/Preferences/preferences.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: 'opentdb', loadChildren: './modules/opentdb/opentdb.module#OpenTDBModule'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
