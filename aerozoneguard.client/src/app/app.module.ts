import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionDocumentComponent } from './submission-document/submission-document.component';
import { SubmissionDocumentListComponent } from './submission-document-list/submission-document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionDocumentComponent,
    SubmissionDocumentListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
