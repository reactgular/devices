import {TEST_STATES} from '../../tests/states';
import {filterKeys, first, isStateSame, selectState} from './functions';
import {of} from 'rxjs';

describe(filterKeys.name, () => {
  it('should include keys that have truthy properties', () => {
    expect(filterKeys({one: true, two: true, three: false}, ['one'])).toEqual(['one']);
    expect(filterKeys({one: true, two: true, three: false}, ['one', 'two'])).toEqual(['one', 'two']);
    expect(filterKeys({one: true, two: true, three: false}, ['one', 'two', 'three'])).toEqual(['one', 'two']);
    expect(filterKeys({one: true, two: true, three: false}, ['one', 'two', 'three', 'four'])).toEqual(['one', 'two']);
    expect(filterKeys({one: true, two: true, three: false}, ['two', 'three', 'four'])).toEqual(['two']);
  });

  it('should return empty array', () => {
    expect(filterKeys({}, [])).toEqual([]);
    expect(filterKeys({}, ['one', 'two', 'three'])).toEqual([]);
    expect(filterKeys({one: true, two: true, three: true}, [])).toEqual([]);
    expect(filterKeys({one: false, two: false, three: false}, [])).toEqual([]);
    expect(filterKeys({one: false, two: false, three: false}, ['one', 'two', 'three'])).toEqual([]);
  });
});

describe(first.name, () => {
  it('should return first item in array', () => {
    expect(first(['one', 'two', 'three'])).toBe('one');
    expect(first(['one'])).toBe('one');
  });

  it('should return undefined', () => {
    expect(first([])).toBeUndefined();
  });
});

describe(isStateSame.name, () => {
  it('should compare same values as true', () => {
    TEST_STATES.forEach(state => expect(isStateSame({...state}, {...state})).toBeTruthy());
  });

  it('should compare different values as false', () => {
    TEST_STATES.forEach(state => {
      const others = TEST_STATES.filter(s => s !== state);
      others.forEach(other => expect(isStateSame({...state}, {...other})).toBeFalsy());
    });
  });
});

describe(selectState.name, () => {
  it('should apply a map and distinct operator', () => {
    TEST_STATES.forEach(state => {
      const values = [];
      selectState(of(state, state, state, state), s => s.device).subscribe(value => values.push(value));
      expect(values).toEqual([state.device]);
    });
  });
});
