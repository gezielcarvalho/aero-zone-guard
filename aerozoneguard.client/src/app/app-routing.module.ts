import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionDocumentComponent } from './submission-document/submission-document.component';

const routes: Routes = [
  { path: 'submission-document', component: SubmissionDocumentComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
