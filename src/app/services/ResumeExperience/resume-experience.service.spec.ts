import { TestBed } from '@angular/core/testing';

import { ResumeExperienceService } from './resume-experience.service';

describe('ResumeExperienceService', () => {
  let service: ResumeExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
