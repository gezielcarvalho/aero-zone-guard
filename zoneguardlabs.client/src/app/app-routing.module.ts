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
export class AppRoutingModule
{
  constructor()
  {
    console.log("AppRoutingModule constructor");
  };

  test = () => {
    console.log("test");
  }

  test2 = () => {
    console.log("test2"); 
  }

  test3 = () => {
    console.log("test3")
  }
}
