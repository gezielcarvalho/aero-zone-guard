import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmissionDocument } from './submission-document.model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionDocumentService {

  private apiUrl = 'https://localhost:7122/api/SubmissionDocuments';

  constructor(private http: HttpClient) { }

  // Create a new submission document
  createSubmissionDocument(submissionDocument: SubmissionDocument): Observable<SubmissionDocument> {
    return this.http.post<SubmissionDocument>(this.apiUrl, submissionDocument);
  }

  // Get all submission documents
  getSubmissionDocuments(): Observable<SubmissionDocument[]> {
    return this.http.get<SubmissionDocument[]>(this.apiUrl);
  }

  // Get a single submission document by ID
  getSubmissionDocumentById(id: number): Observable<SubmissionDocument> {
    return this.http.get<SubmissionDocument>(`${this.apiUrl}/${id}`);
  }

  // Update an existing submission document
  updateSubmissionDocument(id: number, submissionDocument: SubmissionDocument): Observable<SubmissionDocument> {
    return this.http.put<SubmissionDocument>(`${this.apiUrl}/${id}`, submissionDocument);
  }

  // Delete a submission document
  deleteSubmissionDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
