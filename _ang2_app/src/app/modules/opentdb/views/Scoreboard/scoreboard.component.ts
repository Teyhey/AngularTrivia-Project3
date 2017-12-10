import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
//import { Component } from '@angular/core';
import { TriviaWebService } from '../../triviaplayer.service';

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

  constructor(private triviaservice: TriviaWebService) {}

  ngOnInit() {
    this.triviaservice.getTopScores().subscribe(
      data => {
        this.usertest = (data['result'][0]['username']);
        this.scoretest = (data['result'][0]['score']);
        for (let i = 0; i < (data['result']).length; i++) {
          this.userarray[i] = (data['result'][i]['username']);
        }
        for (let i = 0; i < (data['result']).length; i++) {
          this.scorearray[i] = (data['result'][i]['score']);
        }
      },
      error => alert(error),
      () => console.log('Finished')

    );
  }

}
