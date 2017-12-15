import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
//import { Component } from '@angular/core';
import { TriviaWebService } from '../../triviaplayer.service';
import { Globals } from '../../../../globals';
declare var $: any;

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  usertest;
  scoretest;
  userarray = ['why'];
  scorearray = ['test'];
  difficulty = 'Any';
  category = 'Any';
  totalquestions = '10';

  constructor(private triviaservice: TriviaWebService, private globals: Globals) {}

  ngOnInit() {
	$(".center-logo").show();
	$(".jumbotron").show();
	
    this.triviaservice.getTopScores(this.category, this.difficulty, this.totalquestions).subscribe(
      data => {
        if (data['result'][0] != null) {
          this.usertest = (data['result'][0]['username']);
          this.scoretest = (data['result'][0]['score']);
          for (let i = 0; i < (data['result']).length; i++) {
            this.userarray[i] = (data['result'][i]['username']);
          }
          for (let i = 0; i < (data['result']).length; i++) {
            this.scorearray[i] = (data['result'][i]['score']);
          }
        }
      },
      error => alert(error),
      () => console.log('Finished')

    );
  }

  callScores() {
  this.userarray = [];
  this.scorearray = [];

    this.triviaservice.getTopScores(this.category, this.difficulty, this.totalquestions).subscribe(
      data => {
        if (data['result'][0] != null) {
          this.usertest = (data['result'][0]['username']);
          this.scoretest = (data['result'][0]['score']);
          for (let i = 0; i < (data['result']).length; i++) {
            this.userarray[i] = (data['result'][i]['username']);
          }
          for (let i = 0; i < (data['result']).length; i++) {
            this.scorearray[i] = (data['result'][i]['score']);
          }
        }
      },
      error => alert(error),
      () => console.log('Finished')
    );
  }

  setDifficulty(dropdown) {
    this.difficulty = dropdown['value'];
    console.log(this.difficulty);
    this.callScores();
  }

  setCat(select) {
    this.category = select['value'];
    this.callScores();
  }

  setQuestions(select) {
    this.totalquestions = select['value'];
    this.callScores();
  }

}
