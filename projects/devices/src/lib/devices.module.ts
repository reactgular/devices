import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {DevicesService} from './devices/devices.service';

@NgModule({
    imports: [
        LayoutModule
    ],
    providers: [
        DevicesService
    ],
    exports: [
        LayoutModule
    ]
})
export class DevicesModule {

}
