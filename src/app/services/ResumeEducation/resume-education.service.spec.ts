import { TestBed } from '@angular/core/testing';

import { ResumeEducationService } from './resume-education.service';

describe('ResumeEducationService', () => {
  let service: ResumeEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
