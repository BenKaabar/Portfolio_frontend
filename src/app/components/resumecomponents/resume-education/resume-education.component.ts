import { Component, OnInit } from '@angular/core';
import { ResumeEducation } from 'src/app/models/ResumeEducation';
import { ResumeEducationService } from 'src/app/services/ResumeEducation/resume-education.service';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.css']
})
export class ResumeEducationComponent implements OnInit{
  allResumeEducation: ResumeEducation[] = [];

  constructor(private resumeEducationService: ResumeEducationService){}
  
  ngOnInit(): void {
    this.getAllResumeEducation();
  }

// ********************************************************************** Display ResumeEducation **********************************************************************
  getAllResumeEducation() {
    this.resumeEducationService.AllResumeEducation().subscribe({
      next: (response)=>{
        this.allResumeEducation = response;
      },
    })
  }
}
