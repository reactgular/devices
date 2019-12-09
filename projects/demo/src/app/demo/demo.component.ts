import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DevicesService} from '@reactgular/devices';
import {Observable} from 'rxjs';

@Component({
    selector: 'rg-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
    public examples: { title: string; value$: Observable<any>; }[];

    public constructor(private readonly _devices: DevicesService) {
        this.examples = [
            {title: 'state$', value$: _devices.state$},
            {title: 'device$', value$: _devices.device$},
            {title: 'landscape$', value$: _devices.landscape$},
            {title: 'orientation$', value$: _devices.orientation$},
            {title: 'portrait$', value$: _devices.portrait$},
            {title: 'handset$', value$: _devices.handset$},
            {title: 'tablet$', value$: _devices.tablet$},
            {title: 'web$', value$: _devices.web$}
        ];
    }
}
