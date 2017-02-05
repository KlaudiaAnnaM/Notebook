import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'notes', component: NotesComponent },
    { path: 'detail/:id', component: NoteDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }