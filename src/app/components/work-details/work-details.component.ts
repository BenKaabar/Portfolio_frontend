import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/work';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  work!: Work;
  isLoading = true;
  constructor(private router: Router,
    private sanitizer: DomSanitizer) {}

  // ngOnInit(): void {
  //   const state = history.state;
  //   if (!state.work) {
  //     this.router.navigate(['/Work']);
  //     return;
  //   }
  //     this.work = state.work;
  //     this.work.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.work.video);
  // }
  

  ngOnInit(): void {
    setTimeout(() => {
      const state = history.state;
      if (!state.work) {
        this.router.navigate(['/works']);
        return;
      }
      this.work = state.work;
      this.work.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.work.video);
      this.isLoading = false;
    }, 3000);
  }
}