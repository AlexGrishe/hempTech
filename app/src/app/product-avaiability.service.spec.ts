import { TestBed } from '@angular/core/testing';

import { ProductAvaiabilityService } from './product-avaiability.service';

describe('ProductAvaiabilityService', () => {
  let service: ProductAvaiabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAvaiabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
