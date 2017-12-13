import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  powerLevel = 0;
  onSubmit() {
    console.log("MADE IT");
  
  }
}
