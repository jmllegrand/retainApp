/**
 * Created by jmlegrand on 30/10/16.
 */

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'note-creator',
    styles: [`
        .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0, 0, 0, 0.8);
        }
        .full {
            height: 100px;
        }
    `
    ],
    template: `<div class="note-creator shadow-2">
    <form class="row" (submit)="onSaveNote(note)">
        <input type="text" 
                [(ngModel)]="note.title"
                name = "title"
                placeholder="Title" 
                class="col-xs-10 title">
        <input type="text" 
            [(ngModel)] = "note.value"
            name = "value"
            placeholder="Take a note ..." 
            class="col-xs-10">
        <div class="actions col-xs-12 row between-xs">
            <button type="submit" class="btn-light">
                Done
            </button>
        </div>
    </form>
    <pre>{{note | json}}</pre>
</div>

`
})

export class NoteCreator {
    @Output() saveNote = new EventEmitter();

    note = {
        title: "",
        value: "",
        color: "lightblue"
    };

    onSaveNote = (aNote) => {
        if (aNote.title && aNote.value) {
            this.saveNote.emit(aNote);
            this.resetNote();
        }
        console.log("datas", JSON.stringify(aNote));
    };

    resetNote = () => {
        this.note = {
            title: "",
            value: "",
            color: "lightblue"
        }
    };

}

