import { TestBed } from '@angular/core/testing';

import { CupcakeService } from './cupcake.service';

describe('CupcakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CupcakeService = TestBed.get(CupcakeService);
    expect(service).toBeTruthy();
  });
});
