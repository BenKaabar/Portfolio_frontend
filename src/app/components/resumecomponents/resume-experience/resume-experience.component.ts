import { Component, OnInit } from '@angular/core';
import { ResumeExperience } from 'src/app/models/ResumeExperience';
import { ResumeExperienceService } from 'src/app/services/ResumeExperience/resume-experience.service';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.css']
})
export class ResumeExperienceComponent implements OnInit{
  allResumeExperience: ResumeExperience[] = [];

  constructor(private resumeExperienceService: ResumeExperienceService){}
  
  ngOnInit(): void {
    this.getAllResumeEducation();
  }

// ********************************************************************** Display ResumeEducation **********************************************************************
  getAllResumeEducation() {
    this.resumeExperienceService.AllResumeExperience().subscribe({
      next: (response)=>{
        this.allResumeExperience = response;
      },
    })
  }
}