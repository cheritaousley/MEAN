import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  numbers: number[] = [];
  difference: number;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers(2)
  }
  // pushOne() {
  //   this._dataService.addNumber(1);
  // }
  subtract() {
    console.log("MADE IT");
    this.difference = this._dataService.difference();
    console.log(this.difference);
  }
}
