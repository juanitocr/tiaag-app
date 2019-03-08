import { TestBed } from '@angular/core/testing';

import { BorregasService } from './borregas.service';

describe('BorregasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorregasService = TestBed.get(BorregasService);
    expect(service).toBeTruthy();
  });
});
