import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private globals: Globals) {
  
  }

  ngOnInit() {
	$(".center-logo").show();
	$(".jumbotron").show();
  }

}
