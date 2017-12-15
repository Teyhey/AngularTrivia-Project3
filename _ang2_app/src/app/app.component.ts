import { Component } from '@angular/core';
//import { OrderBy } from "./orderBy.pipe";
import { Globals } from './globals';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crazy Cash Taxi';
  
  constructor(private globals: Globals) { }
}
