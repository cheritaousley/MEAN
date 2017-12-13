import { Component, OnInit, DoCheck} from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.css']
})
export class ShowScoreComponent implements OnInit {
  message;
  constructor(private _scoreService: ScoreService) { }

  ngOnInit() { //runs when the component is initialized
    // this.message = this._scoreService.showScore();
  }
  // ngDoCheck() {
  //   this.message = this._scoreService.showScore();
  // }
  
}
