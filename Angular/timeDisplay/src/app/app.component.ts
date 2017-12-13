import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  date = new Date();
  timezoneSelected = null;
  onButtonClick(timezone) {
    this.date = new Date();
    console.log("MADE IT")
    console.log(timezone)
    if(timezone === 'CST'){
      this.date;
    }
    else if(timezone === 'PST'){
      console.log("changing to PST")
      this.date.setHours(this.date.getHours() - 2);
      console.log(this.date);
      this.date = this.date;
    }
    else if(timezone === 'MST'){
      this.date.setHours(this.date.getHours() - 1);
    }
    else if (timezone === 'CST'){
      this.date.setHours(this.date.getHours() + 2);
    }
    else if (timezone === 'EST'){
      this.date.setHours(this.date.getHours() + 3);
    }
    else if(timezone == null){
      this.date = new Date();
    }
  this.timezoneSelected = timezone;
  }
}
