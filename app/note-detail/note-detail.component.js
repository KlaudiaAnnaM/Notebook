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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var note_service_1 = require('../service/note.service');
var NoteDetailComponent = (function () {
    function NoteDetailComponent(noteService, route, location) {
        this.noteService = noteService;
        this.route = route;
        this.location = location;
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.noteService.getNote(+params['id']); })
            .subscribe(function (note) { return _this.note = note; });
    };
    NoteDetailComponent.prototype.save = function () {
        var _this = this;
        this.noteService.update(this.note)
            .then(function () { return _this.goBack(); });
    };
    NoteDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    NoteDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-note-detail',
            styleUrls: ['note-detail.component.css'],
            templateUrl: './note-detail.component.html'
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService, router_1.ActivatedRoute, common_1.Location])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.component.js.map