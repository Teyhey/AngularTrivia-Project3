import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() {
	$(".center-logo").hide();
	$(".jumbotron").hide();
	$("html").css("background-image", )
  }

  ngOnInit() {
  }

}
