import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDocumentListComponent } from './submission-document-list.component';

describe('SubmissionDocumentListComponent', () => {
  let component: SubmissionDocumentListComponent;
  let fixture: ComponentFixture<SubmissionDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionDocumentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
