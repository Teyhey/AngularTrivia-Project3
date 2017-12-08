import { NgModule, Component } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TriviaWebService } from './triviaplayer.service';

  export function openTriviaWebfactory(http: Http) {
    return new TriviaWebService(http, 'https://cisc-474.herokuapp.com/');
  }

  @NgModule({
    declarations: [
    ],
    imports: [
      HttpModule,
    ],
    providers: [{provide: TriviaWebService, useFactory: openTriviaWebfactory, deps: [Http]}],
  })
  export class OpenTriviaWebModule {}
