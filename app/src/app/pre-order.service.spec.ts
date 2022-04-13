import { TestBed } from '@angular/core/testing';

import { PreOrderService } from './pre-order.service';

describe('PreOrderService', () => {
  let service: PreOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
