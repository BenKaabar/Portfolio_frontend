import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{
  selectelement: string | null = null;
  
  ngOnInit(): void {
    this.selectElement("Education");
  }
  selectElement(item: string) {
    this.selectelement = item; 
  }
}
