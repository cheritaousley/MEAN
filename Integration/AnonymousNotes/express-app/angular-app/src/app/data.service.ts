import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Task } from './task';
import { Note } from './note';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
  tasksObserver = new BehaviorSubject([]);

  constructor(private _http: Http, private http: Http) { }

  retrieveNotes() {
    // this._http.get('/api/allNotes').subscribe(
    //   tasks => this.tasksObserver.next(tasks.json()),
    //   errorResponse => console.log(errorResponse)
    // );
    return this._http.get('/api/allNotes')
      .map(response => response.json())
      .toPromise();
  }

  createTask(note: Note) { //this takes in the model;
    // this._http.post('http://localhost:5000/tasks', task).subscribe(
    //   response => this.retrieveAll(),
    //   errorResponse => console.log(errorResponse)
    // );

    return this._http.post('/api/addNote', note) //this link should match the routes in routes.js in the config file of express app
      .map(response => response.json())
      .toPromise();
  }
  notes: any[] = [];
  addNote(_note) {
    this.notes.push(_note);
    console.log(this.notes)
  }
  removeProduct(note) {
    return this._http.post('/api/deleteNote', note) //this link should match the routes in routes.js in the config file of express app
      .map(response => response.json())
      .toPromise();
  }
}