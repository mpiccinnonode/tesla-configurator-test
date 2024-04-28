import { TestBed } from '@angular/core/testing';

import { ModelsProxyService } from './models-proxy.service';

describe('ModelsProxyService', () => {
  let service: ModelsProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
