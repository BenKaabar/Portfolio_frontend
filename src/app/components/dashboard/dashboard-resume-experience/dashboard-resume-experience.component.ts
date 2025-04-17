import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeExperience } from 'src/app/models/ResumeExperience';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResumeExperienceService } from 'src/app/services/ResumeExperience/resume-experience.service';

@Component({
  selector: 'app-dashboard-resume-experience',
  templateUrl: './dashboard-resume-experience.component.html',
  styleUrls: ['./dashboard-resume-experience.component.css']
})
export class DashboardResumeExperienceComponent implements OnInit{
  CreateResumeExperienceform!: FormGroup;
  allResumeExperience: ResumeExperience[] = [];
  selectedResumeExperience:ResumeExperience | null = null;
  isConsultModalOpen = false;
  isCreateModalOpen =false;

  constructor(private resumeExperienceService: ResumeExperienceService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){}
  
  ngOnInit(): void {
    this.getAllResumeExperience();
    this.initializeCreateResumeExperienceform();
  }

// ********************************************************************** Logout **********************************************************************
 Logout(){
  this.authService.Logout()
  this.router.navigateByUrl("/Home")
 }

// ********************************************************************** Display ResumeExperience **********************************************************************
  getAllResumeExperience() {
    this.resumeExperienceService.AllResumeExperience().subscribe({
      next: (response)=>{
        this.allResumeExperience = response;
      },
    })
  }

//  ********************************************************************** Consulting ResumeExperience **********************************************************************
  openConsultModal(ResumeExperience: ResumeExperience) {
    this.selectedResumeExperience = ResumeExperience;
    this.isConsultModalOpen = true;
  }
  closeConsultModal() {
    this.isConsultModalOpen = false;
  }

//  ********************************************************************** delete ResumeExperience **********************************************************************
  toDelete(idResumeExperience: string): void{
    this.resumeExperienceService.DeleteResumeExperience(idResumeExperience).subscribe({
      next:(response)=>{
        this.allResumeExperience = this.allResumeExperience.filter(ResumeExperience => ResumeExperience.idResumeExperience !== idResumeExperience);
        this.getAllResumeExperience();
      },
    });
  }
  
//  ********************************************************************** Create ResumeExperience **********************************************************************
  initializeCreateResumeExperienceform(): void {
    this.CreateResumeExperienceform = this.formBuilder.group({
      date: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  openCreateModal() {
    this.isCreateModalOpen = true;
  }
  closeCreateModal() {
    this.isCreateModalOpen = false;
  }
  CreateResumeExperience(){
    if (this.CreateResumeExperienceform.valid) {
      const resumeExperienceRequestDTO = {
        title: this.CreateResumeExperienceform.value.title,
        date: this.CreateResumeExperienceform.value.date,
        description: this.CreateResumeExperienceform.value.description
      }
      this.resumeExperienceService.CreateResumeExperience(resumeExperienceRequestDTO).subscribe({
        next: (response) => {
          this.closeCreateModal();
          this.CreateResumeExperienceform.reset();
          this.getAllResumeExperience();
        }      
      })
    }else {
      console.log('Formulaire invalide');
    }
  }

}
