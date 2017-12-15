import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
declare var $: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	private questionSet1: string;
	private questionSet2: string;
	private questionSet3: string;
	
	private strikeCount: number = 0;
	private moneyAmount: number = 0.00;
	
	
  constructor(private globals: Globals) {
  }

  ngOnInit() {
	$(".center-logo").hide();
	$(".jumbotron").hide();
	
	if (this.globals.loggedIn != true) {
		
	}
  }

}
