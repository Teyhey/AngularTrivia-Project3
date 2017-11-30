import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ScoreboardComponent } from './views/Scoreboard/scoreboard.component';
import { PreferencesComponent } from './views/preferences/preferences.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'scoreboard', component: ScoreboardComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: 'opentdb', loadChildren: './modules/opentdb/opentdb.module#OpenTDBModule'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
