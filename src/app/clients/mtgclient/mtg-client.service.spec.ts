import { TestBed } from '@angular/core/testing';

import { MtgClientService } from './mtg-client.service';

describe('MtgClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtgClientService = TestBed.get(MtgClientService);
    expect(service).toBeTruthy();
  });
});
