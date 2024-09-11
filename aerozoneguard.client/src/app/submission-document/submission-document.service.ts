import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionDocumentService {

  private apiUrl = 'https://localhost:7122/api/';

  constructor(private http: HttpClient) { }
}
