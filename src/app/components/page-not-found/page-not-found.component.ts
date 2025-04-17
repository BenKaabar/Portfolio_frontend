import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit{
  constructor ( private router: Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/Home']);
    }, 5000);
  }

}
