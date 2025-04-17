import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/work';
import { WorkService } from 'src/app/services/Work/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{
  allWorks: Work[] = [];
  selectedWork: Work | null = null;
  page: number = 1;
  itemsPerPage: number = 1;
  isLoading = true;

  constructor(private workService: WorkService, 
    private router: Router){ }

  ngOnInit(): void { 
    this.getallWorks();
  }

// ********************************************************************** Display Work **********************************************************************
  getallWorks() {
    this.workService.AllWorks().subscribe({
      next: (response) => {
        this.allWorks = response.map(work => ({ ...work }));  
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      },
      error: (error) => {
        console.error("Erreur lors de la récupération des travaux :", error);
        this.isLoading = false;
      }
    });
  }

//  ********************************************************************** Work Detail **********************************************************************
  goToWorkDetail(work: Work): void {
    this.router.navigateByUrl('/WorkDetail', { state: { work } });
  }

//  ********************************************************************** Pagination **********************************************************************
  get paginatedWorks(): Work[] {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allWorks.slice(startIndex, endIndex);
  }
  get totalPages(): number {
    return Math.ceil(this.allWorks.length / this.itemsPerPage);
  }
  get isPreviousPageDisabled(): boolean {
    return this.page === 1;
  }
  get isNextPageDisabled(): boolean {
    return this.page === this.totalPages;
  }
  goToNextPage(): void {
      this.page++;
  }
  goToPreviousPage(): void {
      this.page--;
  }

}