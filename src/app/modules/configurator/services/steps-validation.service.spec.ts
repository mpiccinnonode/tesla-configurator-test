import { TestBed } from '@angular/core/testing';

import { StepsValidationService } from './steps-validation.service';

describe('StepsValidationService', () => {
  let service: StepsValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
