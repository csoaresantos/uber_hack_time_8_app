import { TestBed } from '@angular/core/testing';

import { IdosoService } from './idoso.service';

describe('IdosoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdosoService = TestBed.get(IdosoService);
    expect(service).toBeTruthy();
  });
});
