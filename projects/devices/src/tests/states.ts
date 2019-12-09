import {RgLayoutState} from '../lib/rg-devices.type';

export const TEST_HANDSET_LANDSCAPE: RgLayoutState = {device: 'handset', orientation: 'landscape'};
export const TEST_TABLET_LANDSCAPE: RgLayoutState = {device: 'tablet', orientation: 'landscape'};
export const TEST_WEB_LANDSCAPE: RgLayoutState = {device: 'web', orientation: 'landscape'};
export const TEST_HANDSET_PORTRAIT: RgLayoutState = {device: 'handset', orientation: 'portrait'};
export const TEST_TABLET_PORTRAIT: RgLayoutState = {device: 'tablet', orientation: 'portrait'};
export const TEST_WEB_PORTRAIT: RgLayoutState = {device: 'web', orientation: 'portrait'};

export const TEST_STATES = [
  TEST_HANDSET_LANDSCAPE,
  TEST_TABLET_LANDSCAPE,
  TEST_WEB_LANDSCAPE,
  TEST_HANDSET_PORTRAIT,
  TEST_TABLET_PORTRAIT,
  TEST_WEB_PORTRAIT
];
