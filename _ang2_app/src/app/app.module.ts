import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { OrderBy } from './orderBy.pipe';
import { PreferencesComponent } from './views/Preferences/preferences.component';
import { GameComponent } from './views/game/game.component';
import { OpenTriviaWebModule } from './modules/opentdb/triviaplayer.module';
import { Globals } from './globals';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
declare var $: any;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferencesComponent,
    OrderBy,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OpenTriviaWebModule,
	FormsModule,
    CollapseModule.forRoot()
  ],
  providers: [Globals, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
