import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
      { email: 'jane@me.com', importance: true, subject: 'New Language', content: 'I am learning a new language' },
      { email: 'joe@doe.com', importance: false, subject: 'New Idea', content: 'I have a new idea' },
      { email: 'john@smith.com', importance: true, subject: 'Language Idea', content: 'I have a language idea' },
      { email: 'kimk@me.com', importance: false, subject: 'Foodie', content: 'I love food :)' }
  ]
}
