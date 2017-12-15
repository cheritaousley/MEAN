import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { TaskService } from '../data.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note = new Note();
  NoteList = [];
  notes;
  myNote;
  constructor(private _taskService: TaskService, private router: Router) { }
  onSubmit() {
    this._taskService.createTask(this.note)
    .then(response => this.myNote= response)
    console.log("IN COMPONENT NOTES:", this.myNote);
  }

  ngOnInit() {
    this._taskService.retrieveNotes()
      .then(response => this.NoteList = response.mynote)
  }

}
   // this._taskService.retrieveNotes()
    //   .then(response => this.NoteList = response.content)
    //   console.log("this is the note:", this.NoteList);
      // console.log("Retrieving the retrieveNotes function", this._taskService.retrieveNotes());
