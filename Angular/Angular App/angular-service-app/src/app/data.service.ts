import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: any[] = [[],[]]
  constructor() { }
  retrieveNumbers(index: number): number[] {
    return this.numbers[index];
  }
  addNumber(index: number) {
    let randomNum: number = Math.floor(Math.random() * 100) + 1;
    this.numbers[index].push(randomNum);
  }
  difference() {
    let sum1 = 0;
    let sum2 = 0;
    for(var i=0; i<this.numbers[0].length; i++){
        sum1 += this.numbers[0][i];
    }
    for (var i = 0; i < this.numbers[1].length; i++) {
      sum2 += this.numbers[1][i];
    }
    let difference: number = sum2 - sum1;
    return difference;
  }
}
