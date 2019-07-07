import { TestBed } from '@angular/core/testing';

import { AcompanhanteService } from './acompanhante.service';

describe('AcompanhanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcompanhanteService = TestBed.get(AcompanhanteService);
    expect(service).toBeTruthy();
  });
});
