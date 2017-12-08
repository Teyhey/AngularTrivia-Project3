import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
//import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  usertest;
  scoretest;

  constructor() {}

  ngOnInit() {
    /*
    this.triviaservice.getTopScores().subscribe(
      data => {
        this.usertest = (data['result']['username']);
        this.scoretest = (data['result']['score']);
      },
      error => alert(error),
      () => console.log('Finished')

    );
    */
  }

}
