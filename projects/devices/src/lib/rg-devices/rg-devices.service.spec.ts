import {TestBed} from '@angular/core/testing';
import {RgDevicesService} from './rg-devices.service';

describe(RgDevicesService.name, () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgDevicesService = TestBed.get(RgDevicesService);
    expect(service).toBeTruthy();
  });
});
