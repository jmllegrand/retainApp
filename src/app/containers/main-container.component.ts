/**
 * Created by jmlegrand on 23/10/16.
 */

import {Component} from '@angular/core';


@Component({
    selector: 'main-container',
    template: `
        <div>
            <app-bar></app-bar>
            <main class="main">
                <note-container></note-container>
            </main>
        </div>
    `
})

export class MainContainerComponent {}