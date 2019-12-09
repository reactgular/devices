import {Breakpoints} from '@angular/cdk/layout';

/**
 * Types of devices.
 */
export type LayoutDevice = 'handset' | 'tablet' | 'web';

/**
 * Types of orientation
 */
export type LayoutOrientation = 'portrait' | 'landscape';

/**
 * Represents a device state.
 */
export interface LayoutState {
    device: LayoutDevice;
    orientation: LayoutOrientation;
}

/**
 * List of break points.
 */
export const DEVICE_BREAKS = [
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletPortrait,
    Breakpoints.WebPortrait,
    Breakpoints.HandsetLandscape,
    Breakpoints.TabletLandscape,
    Breakpoints.WebLandscape
];

/**
 * Map between break points and device state.
 */
export const DEVICE_STATES: { [key: string]: LayoutState } = {
    [Breakpoints.HandsetPortrait]: {device: 'handset', orientation: 'portrait'},
    [Breakpoints.TabletPortrait]: {device: 'tablet', orientation: 'portrait'},
    [Breakpoints.WebPortrait]: {device: 'web', orientation: 'portrait'},
    [Breakpoints.HandsetLandscape]: {device: 'handset', orientation: 'landscape'},
    [Breakpoints.TabletLandscape]: {device: 'tablet', orientation: 'landscape'},
    [Breakpoints.WebLandscape]: {device: 'web', orientation: 'landscape'}
};
