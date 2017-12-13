import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thing = false
  title = 'Switchboard';
  powers = [true, true, true, true, true, true, true, true, true, true,]
  turnPower(index){
    console.log("MADE IT")
    console.log(index)
    this.powers[index] = this.powers[index];
    if(this.powers[index]== true){ //this is how to toggle boolean
      this.powers[index] = false;
    }
    else{
      this.powers[index] = true;
    }
   }
}
