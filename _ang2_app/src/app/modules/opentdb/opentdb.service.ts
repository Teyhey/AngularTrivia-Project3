import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpenTDBService {
  baseUri: string;
  baseCategory: string;
  baseDifficulty: string;
  catUrl: string;
  quizUrl: string;
  catId: number;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

      getCategories(catId: number) {
        this.catId = catId;
        this.catUrl = this.baseUri + 'api_count.php?category=' + catId;
        return this. http.get(this.catUrl)
        .map(res => res.json());
      }

    getQuiz(baseCategory: string, baseDifficulty: string) {
      this.baseCategory = baseCategory;
      this.baseDifficulty = baseDifficulty;
       this.quizUrl = this.baseUri + 'api.php?' + 'amount=1';
       // id range for cats [9,32]
       if (Number(this.baseCategory) >= 9 && Number(this.baseCategory) <= 32) {
           this.quizUrl = this.quizUrl + '&category=' + this.baseCategory;
       }
       if (this.baseDifficulty !== '') {
           this.quizUrl = this.quizUrl + '&difficulty=' + this.baseDifficulty;
       }
       this.quizUrl = this.quizUrl + '&type=multiple';

       return this. http.get(this.quizUrl)
         .map(res => res.json());
   }
}
