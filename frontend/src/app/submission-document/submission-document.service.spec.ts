import { TestBed } from '@angular/core/testing';

import { SubmissionDocumentService } from './submission-document.service';

describe('SubmissionDocumentService', () => {
  let service: SubmissionDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
