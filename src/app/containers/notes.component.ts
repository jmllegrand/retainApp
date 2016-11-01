/**
 * Created by jmlegrand on 23/10/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'notes-container',
    styles: [`
        .notes {
            padding-top: 50px;
        }
        
        .creator {
            margin-bottom: 40px;
        }
    `
    ],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                <note-creator (saveNote)="onSaveNote($event)" ></note-creator>
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card
                            class="col-xs-4"
                            *ngFor="let note of notes"
                            [note]="note"
                            (checked)="onNoteChecked($event)"
                            >
                    </note-card>
                </div>
            </div>
        </div> 
        `
})

export class NotesComponent {
    notes = [
        {title: 'note1', value: 'note value1', color: 'lightblue', status: 'todo'},
        {title: 'note2', value: 'note value2', color: 'lightblue', status: 'todo'},
        {title: 'note3', value: 'note value3', color: 'lightblue', status: 'todo'}
    ];

    onNoteChecked = (note) => {
        this.notes.splice(this.notes.indexOf(note), 1);
    };

    onSaveNote = (note) => {
        console.log('note passed by the note creator', note);
        this.notes.push(note);
        console.log('list of notes after the concat()', this.notes);

    };
}