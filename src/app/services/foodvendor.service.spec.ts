import { TestBed } from '@angular/core/testing';

import { FoodvendorService } from './foodvendor.service';

describe('FoodvendorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodvendorService = TestBed.get(FoodvendorService);
    expect(service).toBeTruthy();
  });
});
