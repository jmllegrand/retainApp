/**
 * Created by jmlegrand on 22/10/16.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App} from "./app";
import {MainContainerComponent} from './containers/main-container.component';
import {UIBarComponent} from "./ui/ui-bar.component";



@NgModule({
    imports: [BrowserModule],
    declarations: [App, MainContainerComponent, UIBarComponent],
    bootstrap : [App]
})

export class AppModule {}