import { TestBed } from '@angular/core/testing';

import { ConfigOptionsProxyService } from './config-options-proxy.service';

describe('ConfigOptionsProxyService', () => {
  let service: ConfigOptionsProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigOptionsProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
