"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var note_1 = require('../models/note');
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        this.notes = [];
        this.lastNoteId = +localStorage.getItem('lastNoteId');
    }
    ;
    NoteService.prototype.getNotes = function () {
        var notesString = localStorage.getItem('notes');
        if (notesString) {
            this.notes = JSON.parse(notesString);
            return Promise.resolve(this.notes);
        }
        else {
            return Promise.reject('get notes error');
        }
    };
    NoteService.prototype.addNote = function (name, content, imageUrl) {
        this.lastNoteId = this.lastNoteId + 1;
        var note = new note_1.Note();
        note.name = name;
        note.content = content;
        note.id = this.lastNoteId;
        note.imgUrl = imageUrl;
        this.notes.push(note);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        localStorage.setItem('lastNoteId', JSON.stringify(this.lastNoteId));
        return Promise.resolve();
    };
    NoteService.prototype.getNote = function (id) {
        return this.getNotes()
            .then(function (notes) { return notes.find(function (note) { return note.id === id; }); });
    };
    NoteService.prototype.update = function (note) {
        for (var i in this.notes) {
            if (this.notes[i].id == note.id) {
                this.notes[i].name = note.name;
                this.notes[i].content = note.content;
                break;
            }
        }
        localStorage.setItem('notes', JSON.stringify(this.notes));
        return Promise.resolve();
    };
    NoteService.prototype.delete = function (id) {
        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id == id) {
                this.notes.splice(+i, 1);
                break;
            }
        }
        localStorage.setItem('notes', JSON.stringify(this.notes));
        return Promise.resolve();
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map