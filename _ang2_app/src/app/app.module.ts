
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { OrderBy } from './orderBy.pipe';
import { LoginComponent } from './views/login/login.component';
import { PreferencesComponent } from './views/Preferences/preferences.component';
import { GameComponent } from './views/game/game.component';
import { OpenTriviaWebModule } from './modules/opentdb/triviaplayer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PreferencesComponent,
    OrderBy,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OpenTriviaWebModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
