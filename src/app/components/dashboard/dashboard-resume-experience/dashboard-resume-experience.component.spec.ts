import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResumeExperienceComponent } from './dashboard-resume-experience.component';

describe('DashboardResumeExperienceComponent', () => {
  let component: DashboardResumeExperienceComponent;
  let fixture: ComponentFixture<DashboardResumeExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardResumeExperienceComponent]
    });
    fixture = TestBed.createComponent(DashboardResumeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
