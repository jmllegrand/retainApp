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
    <form class="row" (submit)="onSaveNote(note)" [ngStyle]="{'background-color': note.color}">
        <input type="text" 
                [(ngModel)]="note.title"
                name = "title"
                placeholder="Title" 
                class="col-xs-10 title"
                (focus)="onFocus($event)"
                >
        <input type="text" 
            [(ngModel)] = "note.value"
            name = "value"
            placeholder="Create a note ..." 
            class="col-xs-10"
            *ngIf="getInputFocus()"
            >
        <div class="actions col-xs-12 row between-xs"
                 *ngIf="note.value && note.title">
                 
            <div class="col-xs-3">
                <color-picker [colors]="colors" (selectedColor)="onSelected($event)"></color-picker>
            </div>     
            <button type="submit" class="btn-light">
                Done
            </button>
        </div>
    </form>
</div>

`
})

export class NoteCreator {
    @Output() saveNote = new EventEmitter();
    inputFocus : boolean = false;
    colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];

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
    };

    getInputFocus = () => this.inputFocus;

    setInputFocus = (focus) => this.inputFocus = focus;

    resetNote = () => {
        this.note = {
            title: "",
            value: "",
            color: "lightblue"
        };
        this.setInputFocus(false);
    };

    onFocus = (data) => this.setInputFocus(true);

    onSelected = (color) => {
        this.note.color = color;
    }

}

