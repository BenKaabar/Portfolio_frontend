import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeEducation } from 'src/app/models/ResumeEducation';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResumeEducationService } from 'src/app/services/ResumeEducation/resume-education.service';

@Component({
  selector: 'app-dashboard-resume-education',
  templateUrl: './dashboard-resume-education.component.html',
  styleUrls: ['./dashboard-resume-education.component.css']
})
export class DashboardResumeEducationComponent implements OnInit{
  allResumeEducation: ResumeEducation[] = [];
  selectedResumeEducation:ResumeEducation | null = null;
  isConsultModalOpen = false;
  isCreateModalOpen =false;
  CreateResumeEducationform!: FormGroup;

  constructor(private resumeEducationService: ResumeEducationService,
     private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router){}
  
  ngOnInit(): void {
    this.getAllResumeEducation();
    this.initializeCreateResumeEducationform();
  }

// ********************************************************************** Display ResumeEducation **********************************************************************
  getAllResumeEducation() {
    this.resumeEducationService.AllResumeEducation().subscribe({
      next: (response)=>{
        this.allResumeEducation = response;
      },
    })
  }

// ********************************************************************** Logout **********************************************************************
  Logout(){
    this.authService.Logout()
    this.router.navigateByUrl("/Home")
  }
  
//  ********************************************************************** Consulting ResumeEducation **********************************************************************
  openConsultModal(ResumeEducation: ResumeEducation) {
    this.selectedResumeEducation = ResumeEducation;
    this.isConsultModalOpen = true;
  }
  closeConsultModal() {
    this.isConsultModalOpen = false;
  }

//  ********************************************************************** delete ResumeEducation **********************************************************************
  toDelete(idResumeEducation: string): void{
    this.resumeEducationService.DeleteResumeEducation(idResumeEducation).subscribe({
      next:(response)=>{
        this.allResumeEducation = this.allResumeEducation.filter(ResumeEducation => ResumeEducation.idResumeEducation !== idResumeEducation);
        this.getAllResumeEducation();
      },
    });
  }
  
//  ********************************************************************** Create ResumeEducation **********************************************************************
  initializeCreateResumeEducationform(): void {
    this.CreateResumeEducationform = this.formBuilder.group({
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
  CreateResumeEducation(){
    if (this.CreateResumeEducationform.valid) {
      const resumeEducationRequestDTO = {
        date: this.CreateResumeEducationform.value.date,
        title: this.CreateResumeEducationform.value.title,
        description: this.CreateResumeEducationform.value.description
      }
      this.resumeEducationService.CreateResumeEducation(resumeEducationRequestDTO).subscribe({
        next: (response) => {
          this.closeCreateModal();
          this.CreateResumeEducationform.reset();
          this.getAllResumeEducation();
        }      
      })
    }else {
      console.log('Formulaire invalide');
    }
  }




}
