import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes.component';
import { NoteService } from './service/note.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    NoteDetailComponent,
    NotesComponent,
  ],

  providers: [
    NoteService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

