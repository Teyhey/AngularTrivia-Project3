import { DialogService } from 'ng2-bootstrap-modal';
import { OpenTDBService } from '../../opentdb.service';
import { Component } from '@angular/core';
import { TriviaWebService } from '../../triviaplayer.service';
import { Globals } from '../../../../globals';
declare var $: any;

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent /*implements OnInit*/ {

  getQuestion: string;
  getAnswer: string;
  showAnswer: string;
  getType: string;
  getWrong1: string;
  getWrong2: string;
  getWrong3: string;
  Spot1: string;
  Spot2: string;
  Spot3: string;
  Spot4: string;
  Score: number;
  questionsCompleted: number;
  questionAnswered = false;
  category = 0;
  difficulty = '';
  timer = 10;
  timerID;
  viewanswertimer;
  viewanswertime = 2;
  ingame? = false;
  totalquestions = 10;
  private _difficultydrop: string;

  // Note, Booleans are not called, multiple choice only for this test, so can safely call the array of inccorect for 0,1,2
  constructor (private httpService: OpenTDBService, private triviaService: TriviaWebService, private globals: Globals) {}

ngOnInit() {
	$(".center-logo").show();
	$(".jumbotron").show();
  }

  onTestGet() {
     this.httpService.getQuiz(this.category, this.difficulty).subscribe(
          data => {
              this.getQuestion = (data['results'][0]['question']);
              this.getAnswer = (data['results'][0]['correct_answer']);
              this.getType = (data['results'][0]['type']);
              this.getWrong1 = (data['results'][0]['incorrect_answers'][0]);
              this.getWrong2 = (data['results'][0]['incorrect_answers'][1]);
              this.getWrong3 = (data['results'][0]['incorrect_answers'][2]);
              this.showAnswer = '';
              this.Spot1 = 'empty';
              this.Spot2 = 'empty';
              this.Spot3 = 'empty';
              this.Spot4 = 'empty';
              if (isNaN(this.Score)) {
                  this.Score = 0;
              }
              if (isNaN(this.questionsCompleted)) {
                  this.questionsCompleted = 0;
              }
              function getRandomInt(min, max) {
                  return Math.floor(Math.random() * (max - min + 1)) + min;
              }
              let randNumb = 0;
              randNumb = getRandomInt(0, 3);
              if (randNumb === 0) {
                  this.Spot1 = this.getAnswer;
              } else if (randNumb === 1) {
                  this.Spot2 = this.getAnswer;
              } else if (randNumb === 2) {
                  this.Spot3 = this.getAnswer;
              } else if (randNumb === 3) {
                  this.Spot4 = this.getAnswer;
              }
              let i = 0;
              for (i; i <= 2; i++) {
                  if (i === 0) {
                      if (this.Spot1 === 'empty') {
                          this.Spot1 = this.getWrong1;
                      } else if (this.Spot2 === 'empty') {
                          this.Spot2 = this.getWrong1;
                      } else if (this.Spot3 === 'empty') {
                          this.Spot3 = this.getWrong1;
                      } else if (this.Spot4 === 'empty') {
                          this.Spot4 = this.getWrong1;
                      }
                  } else if (i === 1) {
                      if (this.Spot1 === 'empty') {
                          this.Spot1 = this.getWrong2;
                      } else if (this.Spot2 === 'empty') {
                          this.Spot2 = this.getWrong2;
                      } else if (this.Spot3 === 'empty') {
                          this.Spot3 = this.getWrong2;
                      } else if (this.Spot4 === 'empty') {
                          this.Spot4 = this.getWrong2;
                      }
                  }else if (i === 2) {
                      if (this.Spot1 === 'empty') {
                          this.Spot1 = this.getWrong3;
                      } else if (this.Spot2 === 'empty') {
                          this.Spot2 = this.getWrong3;
                      } else if (this.Spot3 === 'empty') {
                          this.Spot3 = this.getWrong3;
                      } else if (this.Spot4 === 'empty') {
                          this.Spot4 = this.getWrong3;
                      }
                  }
              }
          },
          error => alert(error),
              () => console.log('Finished')
      );
  }

  clearPreviousData() {
     this.questionsCompleted = 0;
     this.Score = 0;
     document.getElementById('startGame').style.visibility = 'hidden';
     document.getElementById('difficultyDrop').style.visibility = 'hidden';
     document.getElementById('catDrop').style.visibility = 'hidden';
     document.getElementById('totalQuestionDrop').style.visibility = 'hidden';
  }

  submitScore() {
      console.log('called');
      this.triviaService.submitScore(this.Score, this.convertCategory(this.category),
      this.convertDiff(this.difficulty), this.totalquestions).subscribe(
        data => {
          console.log('I guess the data sent?');
        },
          error => {alert(error);
            console.log(error);
        },
          () => console.log('Finished'),
      );
  }
  convertDiff(diff: string) {
    switch (diff) {
        case 'easy':
        return 'Easy';
        case 'medium':
        return 'Medium';
        case 'hard':
        return 'Hard';
        default:
        return 'Any';
    }
  }

  convertCategory(catnum: number) {
      switch (catnum) {
          case 9:
          return 'General Knowledge';
          case 10:
          return 'Books';
          case 11:
          return 'Film';
          case 12:
          return 'Music';
          case 13:
          return 'Musicals & Theatres';
          case 14:
          return 'Television';
          case 15:
          return 'Video Games';
          case 16:
          return 'Board Games';
          case 17:
          return 'Science & Nature';
          case 18:
          return 'Computers';
          case 19:
          return 'Mathematics';
          case 20:
          return 'Mythology';
          case 21:
          return 'Sports';
          case 22:
          return 'Geography';
          case 23:
          return 'History';
          case 24:
          return 'Politics';
          case 25:
          return 'Art';
          case 26:
          return 'Celebrities';
          case 27:
          return 'Animals';
          case 28:
          return 'Vehicles';
          case 29:
          return 'Comics';
          case 30:
          return 'Gadgets';
          case 31:
          return 'Japanese Anime & Manga';
          case 32:
          return 'Cartoon & Animations';
          default:
          return 'Any';
  }
}

  startTimer() {
    this.timer = 10;
    this.questionAnswered = false;
    document.getElementById('game').style.visibility = 'visible';
    const obj = this;
    this.timerID = setInterval(function(){
        if (obj.timer <= 0 || obj.questionAnswered) {
            if (obj.questionsCompleted === obj.totalquestions ) {
                clearInterval(obj.timerID);
                obj.submitScore();
                document.getElementById('startGame').style.visibility = 'visible';
                document.getElementById('difficultyDrop').style.visibility = 'visible';
                document.getElementById('catDrop').style.visibility = 'visible';
                document.getElementById('totalQuestionDrop').style.visibility = 'visible';
            } else {
                clearInterval(obj.timerID);
                if (!obj.questionAnswered) {
                    obj.questionsCompleted += 1;
                }
                obj.delayTimer();
            }
        } else {
            obj.timer = obj.timer - 1;
        }
    }, 1000);

    console.log('called fn');
  }

  delayTimer() {
      this.viewanswertime = 2;
      const obj = this;
      this.viewanswertimer = setInterval(function(){
          if (obj.viewanswertime <= 0) {
            clearInterval(obj.viewanswertimer);
            obj.onTestGet();
            obj.startTimer();
          } else {
            obj.viewanswertime = obj.viewanswertime - 1;
          }
      }, 1000);
  }

  setDifficulty(difficulty: string) {
      this.difficulty = difficulty;
  }

  setCategory(category: number) {
      this.category = category;
  }

  setTotalQuestions(amount: number) {
      this.totalquestions = amount;
  }

  alertPop() {
    const x = document.getElementById('snackbar');
    if (this.viewanswertimer = 0) {
    x.className = 'show';
    setTimeout(function(){ x.className = x.className.replace('show', ''); }, 3000);
    }
}

  onAnswerclick(spot) {
      if (this.showAnswer === '') {
          if (spot === '1') {
              if (this.getAnswer === this.Spot1) {
                  this.Score += this.timer * 10;
                  this.move();
              }
          } else if (spot === '2') {
              if (this.getAnswer === this.Spot2) {
                  this.Score += this.timer * 10;
                  this.move();
              }
          } else if (spot === '3') {
              if (this.getAnswer === this.Spot3) {
                 this.Score += this.timer * 10;
                 this.move();
              }
          } else if (spot === '4') {
              if (this.getAnswer === this.Spot4) {
                 this.Score += this.timer * 10;
                 this.move();
              }
          }
          this.questionsCompleted += 1;
          this.questionAnswered = true;
      }
      this.showAnswer = '--- ' + this.getAnswer + ' ---';
      this.move();
  }

  move() {
    var elem = document.getElementById("myBar");
    const obj = this;
    var width = this.timer;
    var id = setInterval(frame, 820);
    function frame() {
      if (width <= 10) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '';
        document.getElementById("demo").innerHTML = width * 1;
      }
    }
  }

    }




}
