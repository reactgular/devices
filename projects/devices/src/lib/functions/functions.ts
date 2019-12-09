import {RgLayoutState} from '../rg-devices.type';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

/**
 * Returns all the object keys that have truthy properties on the target object.
 */
export const filterKeys = (target: { [key: string]: any; }, keys: string[]): string[] =>
  keys.map(key => target[key] ? key : undefined).filter(Boolean);

/**
 * Returns the first item from an array or undefined.
 */
export const first = <TType>(values: TType[]): TType => values.length === 0 ? undefined : values[0];

/**
 * Compares two state objects to see if they contain the same values.
 */
export const isStateSame = (a: RgLayoutState, b: RgLayoutState) => a.device === b.device && a.orientation === b.orientation;

/**
 * A simply selector function for a state observable.
 */
export const selectState = <TType>(state: Observable<RgLayoutState>, func: (state: RgLayoutState) => TType): Observable<TType> =>
  state.pipe(
    map(func),
    distinctUntilChanged()
  );
