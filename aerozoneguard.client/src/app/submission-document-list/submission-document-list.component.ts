import { Component } from '@angular/core';
import { SubmissionDocument } from '../submission-document/submission-document.model';
import { SubmissionDocumentService } from '../submission-document/submission-document.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submission-document-list',
  templateUrl: './submission-document-list.component.html',
  styleUrl: './submission-document-list.component.css'
})
export class SubmissionDocumentListComponent {

  documents: SubmissionDocument[] = []

  constructor(
    private service: SubmissionDocumentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.service.getSubmissionDocuments().subscribe((data: SubmissionDocument[]) => {
      this.documents = data;
      console.log({ data });
    })
  }

  createDocument(submissionDocument: SubmissionDocument): void {
    this.service.createSubmissionDocument(submissionDocument).subscribe(newDocument => {
      this.documents.push(newDocument);
    });
  }

  editDocument(submissionDocument: SubmissionDocument): void {
    this.router.navigate(['/edit', submissionDocument.id]);
  }

  updateDocument(submissionDocument: SubmissionDocument): void {
    this.service.updateSubmissionDocument(submissionDocument.id, submissionDocument).subscribe(updatedDocument => {
      const index = this.documents.findIndex(doc => doc.id === updatedDocument.id);
      if (index !== -1) {
        this.documents[index] = updatedDocument;
      }
    });
  }

  deleteDocument(submissionDocument: SubmissionDocument): void {
    this.service.deleteSubmissionDocument(submissionDocument.id).subscribe({
      next: () => {
        this.documents = this.documents.filter(doc => doc.id !== submissionDocument.id);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
