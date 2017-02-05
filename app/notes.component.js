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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var note_service_1 = require('./service/note.service');
var NotesComponent = (function () {
    function NotesComponent(router, noteService) {
        this.router = router;
        this.noteService = noteService;
        this.title = 'Notebook';
        this.notes = [];
    }
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteService.getNotes()
            .then(function (notes) {
            _this.notes = notes;
            console.log(notes);
        })
            .catch(function () {
            console.log('Data doesn\'t exist');
        });
    };
    NotesComponent.prototype.add = function (name, content, imageUrl) {
        var _this = this;
        if (!name) {
            return;
        }
        if (!content) {
            return;
        }
        name = name.trim();
        content = content.trim();
        this.noteService.addNote(name, content, imageUrl)
            .then(function () {
            _this.getNotes();
        })
            .catch(function () { });
    };
    NotesComponent.prototype.delete = function (note) {
        var _this = this;
        this.noteService
            .delete(note.id)
            .then(function () {
            _this.getNotes();
            if (_this.selectedNote === note) {
                _this.selectedNote = null;
            }
        });
    };
    NotesComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NotesComponent.prototype.onSelect = function (note) {
        this.selectedNote = note;
    };
    NotesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedNote.id]);
    };
    NotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-notes',
            templateUrl: 'notes.component.html',
            styleUrls: ['notes.component.css'],
            providers: [note_service_1.NoteService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, note_service_1.NoteService])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map