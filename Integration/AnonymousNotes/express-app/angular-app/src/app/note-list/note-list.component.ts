import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { TaskService } from '../data.service';

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  note = new Note();
  NoteList = [];
  notes;
  constructor(private _taskService: TaskService) { }
onSubmit(){
  this._taskService.retrieveNotes()
  .then(data => this.NoteList = data.results)
  console.log(this._taskService.retrieveNotes());
}
ngOnInit() {
  this._taskService.retrieveNotes()
    .then(response => this.NoteList = response.mynote)
}
}
// this._taskService.retrieveNotes()
//   .then(data => this.NoteList = data.results)
// console.log(this._taskService.retrieveNotes());