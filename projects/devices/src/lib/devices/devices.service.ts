import {BreakpointObserver} from '@angular/cdk/layout';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {filterKeys, first, isStateSame, selectState} from '../functions/functions';
import {DEVICE_BREAKS, DEVICE_STATES, LayoutDevice, LayoutOrientation, LayoutState} from '../devices.type';

@Injectable()
export class DevicesService {
    /**
     * The current device's state.
     */
    public readonly state$: Observable<LayoutState>;

    /**
     * Emits the current device type.
     */
    public readonly device$: Observable<LayoutDevice>;

    /**
     * Emits the current orientation.
     */
    public readonly orientation$: Observable<LayoutOrientation>;

    /**
     * Emits a boolean for handsets.
     */
    public readonly handset$: Observable<boolean>;

    /**
     * Emits a boolean for tablets.
     */
    public readonly tablet$: Observable<boolean>;

    /**
     * Emits a boolean for web (also desktops).
     */
    public readonly web$: Observable<boolean>;

    /**
     * Emits boolean for landscape.
     */
    public readonly landscape$: Observable<boolean>;

    /**
     * Emits boolean for portraits.
     */
    public readonly portrait$: Observable<boolean>;

    /**
     * Constructor
     */
    public constructor(observer: BreakpointObserver) {
        this.state$ = observer.observe(DEVICE_BREAKS).pipe(
            filter(state => state.matches),
            map(state => first(filterKeys(state.breakpoints, DEVICE_BREAKS))),
            map(key => DEVICE_STATES[key]),
            filter<LayoutState>(Boolean),
            distinctUntilChanged(isStateSame)
        );

        this.device$ = selectState(this.state$, state => state.device);
        this.orientation$ = selectState(this.state$, state => state.orientation);
        this.handset$ = selectState(this.state$, state => state.device === 'handset');
        this.tablet$ = selectState(this.state$, state => state.device === 'tablet');
        this.web$ = selectState(this.state$, state => state.device === 'web');
        this.landscape$ = selectState(this.state$, state => state.orientation === 'landscape');
        this.portrait$ = selectState(this.state$, state => state.orientation === 'portrait');
    }
}
