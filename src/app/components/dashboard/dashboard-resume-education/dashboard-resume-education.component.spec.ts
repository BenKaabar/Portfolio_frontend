import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResumeEducationComponent } from './dashboard-resume-education.component';

describe('DashboardResumeEducationComponent', () => {
  let component: DashboardResumeEducationComponent;
  let fixture: ComponentFixture<DashboardResumeEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardResumeEducationComponent]
    });
    fixture = TestBed.createComponent(DashboardResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
