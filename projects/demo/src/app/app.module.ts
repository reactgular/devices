import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DevicesModule} from '@reactgular/devices';
import {DemoComponent} from './demo/demo.component';

@NgModule({
    imports: [
        BrowserModule,
        DevicesModule
    ],
    declarations: [
        DemoComponent
    ],
    bootstrap: [
        DemoComponent
    ]
})
export class AppModule {
}
