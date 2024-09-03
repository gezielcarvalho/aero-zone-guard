import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDocumentComponent } from './submission-document.component';

describe('SubmissionDocumentComponent', () => {
  let component: SubmissionDocumentComponent;
  let fixture: ComponentFixture<SubmissionDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
