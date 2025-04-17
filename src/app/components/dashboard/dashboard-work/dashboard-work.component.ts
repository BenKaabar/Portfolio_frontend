import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work';
import { WorkService } from './../../../services/Work/work.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-dashboard-work',
  templateUrl: './dashboard-work.component.html',
  styleUrls: ['./dashboard-work.component.css']
})
export class DashboardWorkComponent  implements OnInit{
  allWork: Work[] = [];
  selectedWork:Work | null = null;
  isConsultModalOpen = false;
  isCreateModalOpen =false;
  CreateWorkform!: FormGroup;
  selectedFile: File | null = null;
  selectedUrlFile: any;

  constructor(private WorkService: WorkService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){}
  
  ngOnInit(): void {
    this.getAllWork();
    this.initializeCreateWorkform();
  }

// ********************************************************************** Display work **********************************************************************
  getAllWork() {
    this.WorkService.AllWorks().subscribe({
      next: (response)=>{
        this.allWork = response;
      },
    })
  }

// ********************************************************************** Logout **********************************************************************
  Logout(){
    this.authService.Logout()
    this.router.navigateByUrl("/Home")
  }
 
//  ********************************************************************** Consulting work **********************************************************************
  openConsultModal(Work: Work) {
    this.selectedWork = Work;
    this.isConsultModalOpen = true;
  }
  closeConsultModal() {
    this.isConsultModalOpen = false;
  }

//  ********************************************************************** delete work **********************************************************************
  toDelete(idWork: string): void{
    this.WorkService.deleteWork(idWork).subscribe({
      next:(response)=>{
        this.allWork = this.allWork.filter(Work => Work.idWork !== idWork);
        this.getAllWork();
      },
    });
  }
  
//  ********************************************************************** Create work **********************************************************************
  initializeCreateWorkform(): void {
    this.CreateWorkform = this.formBuilder.group({
      projectType: ['', [Validators.required]],
      title: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      longDescription: ['', [Validators.required]],
      mainTechnology: ['', [Validators.required]],
      allTechnology: ['', [Validators.required]],
      github: ['', [Validators.required]],
      video: ['', [Validators.required]],
      file: [null, [Validators.required]]
    });
  }
  openCreateModal() {
    this.isCreateModalOpen = true;
  }
  closeCreateModal() {
    this.isCreateModalOpen = false;
  }
  CreateWork(){
    if (this.CreateWorkform.valid) {
      const formData = new FormData();
      formData.append('workRequestDTO', JSON.stringify({
        projectType: this.CreateWorkform.value.projectType,
        title: this.CreateWorkform.value.title,
        shortDescription: this.CreateWorkform.value.shortDescription,
        longDescription: this.CreateWorkform.value.longDescription,
        mainTechnology: this.CreateWorkform.value.mainTechnology,
        allTechnology: this.CreateWorkform.value.allTechnology,
        github: this.CreateWorkform.value.github,
        video: this.CreateWorkform.value.video,
      }));
      if (this.selectedFile && this.selectedFile instanceof File) {
        formData.append('photoWork', this.selectedFile, this.selectedFile.name);
      }
      this.WorkService.CreateWork(formData).subscribe({
        next: (response) => {
          this.closeCreateModal();
          this.CreateWorkform.reset();
          this.getAllWork();
        }      
      })
    }else {
      console.log('Formulaire invalide');
    }
  }

//  ********************************************************************** file **********************************************************************
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          this.selectedUrlFile = e.target.result;
        }
      };
      reader.readAsDataURL(file);
      this.CreateWorkform.patchValue({ file: file });
      this.selectedFile = file;
    } else {
      console.error("Aucun fichier sélectionné ou fichier invalide");
    }
  }


}
