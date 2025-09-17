import { Component, OnInit } from '@angular/core';
import { SubmissionDocument } from './submission-document.model';
import { SubmissionDocumentService } from './submission-document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-submission-document',
  templateUrl: './submission-document.component.html',
  styleUrls: ['./submission-document.component.css']
})
export class SubmissionDocumentComponent implements OnInit {

  faFloppyDisk = faFloppyDisk;

  submissionDocument: SubmissionDocument = {
      id: 0,
      userId: 0,
      title: '',
      description: '',
      status: '',
      submissionDate: '',
      lastUpdated: ''
  };

  errorMessage = '';

  constructor(
    private service: SubmissionDocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      let id = this.route.snapshot.params['id'];
      if (id) {
        this.service.getSubmissionDocumentById(id)
          .subscribe({
            next: (value) => {
              this.submissionDocument = value;
            },
            error: (error) => {
              console.error(error);
              this.errorMessage = error.message;
            },
            complete: () => {
              console.log('Complete');
            }
          });
      }
    });
                  
    
  }

  onSubmit(): void {
    const currentDate = new Date().toISOString(); // ISO format for consistency
    this.submissionDocument.lastUpdated = currentDate;
    if (this.submissionDocument.id === 0) {
      this.submissionDocument.submissionDate = currentDate;
      this.createDocument();
    } else {
      this.updateDocument();
    }
    
  }

  updateDocument() {
    this.service.updateSubmissionDocument(this.submissionDocument.id, this.submissionDocument).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.message;
      },
      complete: () => { console.log('Complete'); }
    })
    }

  createDocument() {
    this.submissionDocument.userId = 1; // temporary place holder
    this.service.createSubmissionDocument(this.submissionDocument)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = error.message;
        },
        complete: () => { console.log('Complete'); }
      });
}



  
}
