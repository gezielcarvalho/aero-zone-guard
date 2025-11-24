import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubmissionDocumentComponent } from './submission-document.component';

describe('SubmissionDocumentComponent', () => {
  let component: SubmissionDocumentComponent;
  let fixture: ComponentFixture<SubmissionDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionDocumentComponent],
      imports: [HttpClientTestingModule, FormsModule, FontAwesomeModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: null }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmissionDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
