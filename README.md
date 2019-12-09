[![Build Status](https://travis-ci.org/reactgular/devices.svg?branch=master)](https://travis-ci.org/reactgular/devices)
[![Coverage Status](https://coveralls.io/repos/github/reactgular/devices/badge.svg?branch=master)](https://coveralls.io/github/reactgular/devices?branch=master)
[![npm version](https://badge.fury.io/js/%40reactgular%2Fdevices.svg)](https://badge.fury.io/js/%40reactgular%2Fdevices)

# Devices

Devices is an Angular library that wraps around the `BreakpointObserver`
utility provided by the Angular Material CDK library.

## Overview

Angular Material CDK library provides a `BreakpointObserver` utility
that emits state changes based upon screen and orientation of
the web browser. The problem with this library is that the matching 
rules are broad in scope, and most developers just want to
know what device the user is using.

This library simplifies the business logic of responding to changes in
screen sizes and orientation.

# Install

You need to have an Angular project with the supported Angular version. 
This project was last updated to work with Angular 8.

```bash
npm install --save @reactgular/devices
```

Once installed you need to import the devices module into your project.

```typescript
import {DevicesModule} from '@reactgular/devices';

@NgModule({
    ...
    imports: [DevicesModule, ...],
    ...
})
export class AppModule {
}
```

# Usage

You can use the `DevicesService` in your components or services by 
injecting the service. There are a number of observable properties that 
emit values relative to the type of device or orientation.

These properties of the service just make it easier to work with changes
to the device screen.

```typescript
import {DevicesService} from '@reactgular/devices';

@Component({
   selector: 'app-example',
   template: `
    <div *ngIf="web$ | async">Web only</div>
    <div *ngIf="tablet$ | async">Tablet only</div>
    <div *ngIf="handset$ | async">Handset only</div>
   `
})
export class ExampleComponent {
    public web$: Observable<boolean>;
    public table$: Observable<boolean>;
    public handset$: Observable<boolean>;
    public constructor(devices: DevicesService) {
        this.web$ = devices.web$;
        this.tablet$ = devices.tablet$;
        this.handset$ = devices.handset$;
    }
}
```

# Getting help

You are welcome to open issues for general support questions as well as bug reports and feature requests.
