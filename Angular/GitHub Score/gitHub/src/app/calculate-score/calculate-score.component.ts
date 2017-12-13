import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-calculate-score',
  templateUrl: './calculate-score.component.html',
  styleUrls: ['./calculate-score.component.css']
})
export class CalculateScoreComponent implements OnInit {
  username: string;
  // apiData: any[] = [];
  error: string;
  userScore = 0;
  message;

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
    // this._scoreService.data.subscribe((data) => { this.apiData = data; }
    // );
  }

  onSubmit() {
    this._scoreService.getScore(this.username)
      .then(data => this.userScore = this._scoreService.getData(data))
      .catch(errors => this.error = errors);
    this.message = this._scoreService.showScore(this.userScore);
  }

}



