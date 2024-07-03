import { TestBed } from '@angular/core/testing';

import { WordWrapService } from './word-wrap.service';

describe('WordWrapService', () => {
  let service: WordWrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordWrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
