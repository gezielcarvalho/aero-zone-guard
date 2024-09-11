import { Component, OnInit } from '@angular/core';
import { SubmissionDocument } from './submission-document.model';
import { SubmissionDocumentService } from './submission-document.service';

@Component({
  selector: 'app-submission-document',
  templateUrl: './submission-document.component.html',
  styleUrls: ['./submission-document.component.css']
})
export class SubmissionDocumentComponent implements OnInit {

  submissionDocuments: SubmissionDocument[] = [];

  constructor(private service: SubmissionDocumentService) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.service.getSubmissionDocuments().subscribe(data => {
      this.submissionDocuments = data;
    });
  }

  createDocument(submissionDocument: SubmissionDocument): void {
    this.service.createSubmissionDocument(submissionDocument).subscribe(newDocument => {
      this.submissionDocuments.push(newDocument);
    });
  }

  editDocument(submissionDocument: SubmissionDocument): void {
    this.service.updateSubmissionDocument(submissionDocument.id, submissionDocument).subscribe(updatedDocument => {
      const index = this.submissionDocuments.findIndex(doc => doc.id === updatedDocument.id);
      if (index !== -1) {
        this.submissionDocuments[index] = updatedDocument;
      }
    });
  }

  deleteDocument(submissionDocument: SubmissionDocument): void {
    this.service.deleteSubmissionDocument(submissionDocument.id).subscribe(() => {
      this.submissionDocuments = this.submissionDocuments.filter(doc => doc.id !== submissionDocument.id);
    });
  }
}
