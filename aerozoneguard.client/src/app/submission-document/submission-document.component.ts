import { Component, OnInit } from '@angular/core';
import { SubmissionDocument } from './submission-document.model';
import { SubmissionDocumentService } from './submission-document.service';

@Component({
  selector: 'app-submission-document',
  templateUrl: './submission-document.component.html',
  styleUrls: ['./submission-document.component.css']
})
export class SubmissionDocumentComponent implements OnInit {

  submissionDocument: SubmissionDocument = {
      id: 0,
      userId: 0,
      title: '',
      description: '',
      status: '',
      submissionDate: '',
      lastUpdated: ''
  };

  constructor(private service: SubmissionDocumentService) { }

  ngOnInit(): void {
    //
  }

  onSubmit(): void {
    // Set the submissionDate and lastUpdated to the current date and time
    const currentDate = new Date().toISOString(); // ISO format for consistency
    this.submissionDocument.submissionDate = currentDate;
    this.submissionDocument.lastUpdated = currentDate;
    this.submissionDocument.userId = 1; // temporary place holder

    console.log({ doc: this.submissionDocument });

    this.service.createSubmissionDocument(this.submissionDocument)
      .subscribe({
        next: (value) => { console.log(value); },
        error: (error) => { console.error(error); },
        complete: () => { console.log('Complete'); }
      });
  }


  
}
