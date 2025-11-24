import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubmissionDocumentService } from './submission-document.service';

describe('SubmissionDocumentService', () => {
  let service: SubmissionDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SubmissionDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
