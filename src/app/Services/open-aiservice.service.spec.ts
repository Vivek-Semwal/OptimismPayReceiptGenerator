import { TestBed } from '@angular/core/testing';

import { OpenAiserviceService } from './open-aiservice.service';

describe('OpenAiserviceService', () => {
  let service: OpenAiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
