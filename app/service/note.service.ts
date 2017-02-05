import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Note } from '../models/note';

@Injectable()
export class NoteService {
    private notes: Note[];
    private lastNoteId: number;;

    constructor(private http: Http) {
        this.notes = [];
        this.lastNoteId = +localStorage.getItem('lastNoteId');
    }


    getNotes(): Promise<Note[]> {
        let notesString = localStorage.getItem('notes');
        if (notesString) {
            this.notes = JSON.parse(notesString);
            return Promise.resolve(this.notes);
        } else {
            return Promise.reject('get notes error');
        }
    }

    addNote(name: string, content: string, imageUrl: string): Promise<any> {
        this.lastNoteId = this.lastNoteId + 1
        let note = new Note();

        note.name = name;
        note.content = content;
        note.id = this.lastNoteId;
        note.imgUrl = imageUrl;

        this.notes.push(note);

        localStorage.setItem('notes', JSON.stringify(this.notes));
        localStorage.setItem('lastNoteId', JSON.stringify(this.lastNoteId));

        return Promise.resolve();
    }

    getNote(id: number): Promise<Note> {
        return this.getNotes()
            .then(notes => notes.find(note => note.id === id));
    }

    update(note: Note): Promise<any> {
        for (var i in this.notes) {
            if (this.notes[i].id == note.id) {
                this.notes[i].name = note.name;
                this.notes[i].content = note.content;
                break;
            }
        }

        localStorage.setItem('notes', JSON.stringify(this.notes));
        return Promise.resolve();
    }

    delete(id: number): Promise<any> {
        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id == id) {
                this.notes.splice(+i, 1);

                break;
            }
        }

        localStorage.setItem('notes', JSON.stringify(this.notes));
        return Promise.resolve();
    }

}