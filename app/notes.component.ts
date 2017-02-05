import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from './models/note';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteService } from './service/note.service';


@Component({
    moduleId: module.id,
    selector: 'my-notes',
    templateUrl: 'notes.component.html',
    styleUrls: ['notes.component.css'],
    providers: [NoteService]

})
export class NotesComponent implements OnInit {
    title = 'Notebook';
    notes: Note[];
    selectedNote: Note;

    constructor(
        private router: Router,
        private noteService: NoteService) {
        this.notes = [];
    }

    getNotes(): void {
        this.noteService.getNotes()
            .then(notes => {
                this.notes = notes;
                console.log(notes);
            })
            .catch(() => {
                console.log('Data doesn\'t exist')
            })
    }

    add(name: string, content: string, imageUrl: string): void {
        if (!name) { return; }
        if (!content) { return; }
        name = name.trim();
        content = content.trim();

        this.noteService.addNote(name, content, imageUrl)
            .then(() => {
                this.getNotes();
            })
            .catch(() => { })
    }

    delete(note: Note): void {
        this.noteService
            .delete(note.id)
            .then(() => {
                this.getNotes();
                if (this.selectedNote === note) { this.selectedNote = null; }
            });
    }

    ngOnInit(): void {
        this.getNotes();
    }

    onSelect(note: Note): void {
        this.selectedNote = note;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedNote.id]);
    }
}
