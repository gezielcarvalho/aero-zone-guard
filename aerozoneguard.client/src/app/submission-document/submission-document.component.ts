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
    console.log({ doc: this.submissionDocument })
  }

  
}
