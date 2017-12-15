import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AppComponent },
  // { path: 'addnote', component: NotesComponent },
  // { path: 'notes', component: NoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
