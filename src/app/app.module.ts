/**
 * Created by jmlegrand on 22/10/16.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App} from "./app";
import {MainComponent} from './containers/main.component';
import {BarComponent} from "./ui/bar.component";
import {NotesComponent} from "./containers/notes.component";
import {NoteCardComponent} from "./ui/note-card.component";



@NgModule({
    imports: [BrowserModule],
    declarations: [App, MainComponent, BarComponent, NotesComponent, NoteCardComponent],
    bootstrap : [App]
})

export class AppModule {}