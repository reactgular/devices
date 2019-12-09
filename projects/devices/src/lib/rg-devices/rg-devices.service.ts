import {Injectable} from '@angular/core';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {RG_DEVICE_BREAKS, RG_DEVICE_STATES, RgLayoutDevice, RgLayoutOrientation, RgLayoutState} from '../rg-devices.type';
import {Observable} from 'rxjs';
import {filterKeys, first, isStateSame, selectState} from '../functions/functions';

@Injectable()
export class RgDevicesService {
  /**
   * The current device's state.
   */
  public readonly state$: Observable<RgLayoutState>;

  /**
   * Emits the current device type.
   */
  public readonly device$: Observable<RgLayoutDevice>;

  /**
   * Emits the current orientation.
   */
  public readonly orientation$: Observable<RgLayoutOrientation>;

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
  public constructor({observe}: BreakpointObserver) {
    this.state$ = observe(RG_DEVICE_BREAKS).pipe(
      filter(state => state.matches),
      map(state => first(filterKeys(state.breakpoints, RG_DEVICE_BREAKS))),
      map(key => RG_DEVICE_STATES[key]),
      filter<RgLayoutState>(Boolean),
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
