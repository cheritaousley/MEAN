import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScoreService {
  data = new BehaviorSubject([]);
  score;
  constructor(private http : Http) { }

getScore(username) {
  return this.http.get(`https://api.github.com/users/${username}`)
  .map(response => response.json()).toPromise();
}
getData(userApi) {
  console.log(userApi);
   this.score = userApi.public_repos + userApi.followers;
   return this.score;
}
showScore(_userScore) {
  console.log(_userScore);
  let message = " ";
   if(_userScore < 20 ){
    message="Needs work!";
   }
   else if (_userScore > 20 && _userScore < 50){
     message="decent start!"
   }
   else if (_userScore > 50 && _userScore < 100){
     message="doing good!"
   }
   else if (_userScore > 100 && _userScore < 200) {
     message="Great Job!"
   }
   else if (_userScore >= 200) {
     message="ayeeeeeeee!"
  } console.log(message);
return message;
}

}