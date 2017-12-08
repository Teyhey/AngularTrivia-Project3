
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { OrderBy } from './orderBy.pipe';
import { LoginComponent } from './views/login/login.component';
import { PreferencesComponent } from './views/preferences/preferences.component';
import { ScoreboardComponent } from './views/Scoreboard/scoreboard.component';
import { GameComponent } from './views/game/game.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PreferencesComponent,
<<<<<<< HEAD
    ScoreboardComponent,
    OrderBy,
    GameComponent,
=======
    OrderBy,
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
