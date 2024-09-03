import { Component } from '@angular/core';
import { SubmissionDocument } from '../submission-document.model';

@Component({
  selector: 'app-submission-document',
  templateUrl: './submission-document.component.html',
  styleUrl: './submission-document.component.css'
})
export class SubmissionDocumentComponent {
  submissionDocuments: SubmissionDocument[] = [
    {
      id: 1,
      userId: 1,
      title: 'Document 1',
      description: 'Description 1',
      status: 'Submitted',
      submissionDate: '2021-10-01',
      lastUpdated: '2021-10-01'
    },
    {
      id: 2,
      userId: 1,
      title: 'Document 2',
      description: 'Description 2',
      status: 'Submitted',
      submissionDate: '2021-10-01',
      lastUpdated: '2021-10-01'
    }
  ];

  editDocument(submissionDocument: SubmissionDocument) {
    console.log('Edit document:', submissionDocument);
  }

  deleteDocument(submissionDocument: SubmissionDocument) {
    console.log('Delete document:', submissionDocument);
  }

}
