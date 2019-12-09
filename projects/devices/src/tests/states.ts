import {LayoutState} from '../lib/devices.type';

export const TEST_HANDSET_LANDSCAPE: LayoutState = {device: 'handset', orientation: 'landscape'};
export const TEST_TABLET_LANDSCAPE: LayoutState = {device: 'tablet', orientation: 'landscape'};
export const TEST_WEB_LANDSCAPE: LayoutState = {device: 'web', orientation: 'landscape'};
export const TEST_HANDSET_PORTRAIT: LayoutState = {device: 'handset', orientation: 'portrait'};
export const TEST_TABLET_PORTRAIT: LayoutState = {device: 'tablet', orientation: 'portrait'};
export const TEST_WEB_PORTRAIT: LayoutState = {device: 'web', orientation: 'portrait'};

export const TEST_STATES = [
  TEST_HANDSET_LANDSCAPE,
  TEST_TABLET_LANDSCAPE,
  TEST_WEB_LANDSCAPE,
  TEST_HANDSET_PORTRAIT,
  TEST_TABLET_PORTRAIT,
  TEST_WEB_PORTRAIT
];
