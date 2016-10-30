/**
 * Created by jmlegrand on 22/10/16.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {App} from "./app";
import {MainComponent} from './containers/main.component';
import {BarComponent} from "./ui/bar.component";
import {NotesComponent} from "./containers/notes.component";
import {NoteCardComponent} from "./ui/note-card.component";
import {NoteCreator} from "./ui/note-creator";



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [App, MainComponent, BarComponent, NotesComponent, NoteCardComponent, NoteCreator],
    bootstrap : [App]
})

export class AppModule {}