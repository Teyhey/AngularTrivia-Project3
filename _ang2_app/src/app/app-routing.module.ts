import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PreferencesComponent } from './views/Preferences/preferences.component';
import { GameComponent } from './views/game/game.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'preferences', component: PreferencesComponent, canActivate: [AuthGuard]},
  {path: 'game', component: GameComponent},
  {path: 'opentdb', loadChildren: './modules/opentdb/opentdb.module#OpenTDBModule'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
