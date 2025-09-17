import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionDocumentComponent } from './submission-document/submission-document.component';
import { SubmissionDocumentListComponent } from './submission-document-list/submission-document-list.component';

const routes: Routes = [
  { path: '', component: SubmissionDocumentListComponent },
  { path: 'create', component: SubmissionDocumentComponent },
  { path: 'edit/:id', component: SubmissionDocumentComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
