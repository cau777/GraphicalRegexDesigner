import { TestBed } from '@angular/core/testing';

import { RegexBuilderService } from './regex-builder.service';

describe('RegexBuilderService', () => {
  let service: RegexBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegexBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
