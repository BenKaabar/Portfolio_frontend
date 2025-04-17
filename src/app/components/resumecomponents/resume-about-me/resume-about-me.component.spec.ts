import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAboutMeComponent } from './resume-about-me.component';

describe('ResumeAboutMeComponent', () => {
  let component: ResumeAboutMeComponent;
  let fixture: ComponentFixture<ResumeAboutMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeAboutMeComponent]
    });
    fixture = TestBed.createComponent(ResumeAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
