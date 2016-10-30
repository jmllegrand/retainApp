/**
 * Created by jmlegrand on 23/10/16.
 */

import {Component, Input} from '@angular/core';


@Component({
    selector: 'note-card',
    styles: [`
        .note-card {
            padding: 15px;
            border-radius: 2px;
            width: 100%;
            position: relative;
        }
        
        .title {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: left;
            color: rgba(0, 0, 0, 0.8);
        }
        
        .value {
            text-align: left;
            font-size: 1.4rem;
            font-weight: 200;
        }
        
        .icon {
            position: absolute;
            color: black;
            border: 1px solid lightgrey;
            background-color: white;
            font-size: 30px;
            top: -10px;
            left: -10px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            cursor: pointer;
        }`
    ],
    template: `
     <div class="note-card row shadow-1"
         [ngStyle]="{'background-color': note.color}"
          (mouseleave)="onMouseLeave()"
          (mouseenter)="onMouseEnter()">
        <div class="icon"  
            (click)="onChecked()" 
            *ngIf="getShowIcon()">
            <i class="material-icons">check</i>
        </div>
        <div class="col-xs-12 title">
            {{note.title}}
        </div>
        <div class="col-xs-12 value">
            {{note.value}}
        </div>
    </div>

`
})

export class UINoteCardComponent {

    // note = {title: 'clean up', value: 'clean room'};
    @Input() note = {};
    showIcon : boolean = false;



    onChecked() {
        console.log('tata');
    }

    onMouseLeave = () => {
        console.log('onMouseLeave');
        this.setShowIcon(false);
    };

    onMouseEnter = () => {
        console.log('onMouseEnter');
        this.setShowIcon(true);
    };

    getShowIcon = () => this.showIcon;

    setShowIcon = (value) => this.showIcon = value;

}