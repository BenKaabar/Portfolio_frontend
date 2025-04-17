import { HomeService } from './../../services/Home/home.service';
import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/Home';
import { LanguageService } from 'src/app/services/Language/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allHomes: any[] = [];
  selectedHome: Home | null = null;
  currentLanguage!: string;

  constructor(private homeService: HomeService, private languageService: LanguageService){ }

  ngOnInit(): void {
    this.getallHomes();
    this.checkLanguage();
  }

// ********************************************************************** Display Home **********************************************************************
  getallHomes() {
    this.homeService.AllHome().subscribe({
      next: (response) => {
        this.allHomes = response.map(home => {
          return {
            ...home,
            filephoto: 'data:image/jpeg;base64,' + home.filephoto,
            cvFile: 'data:image/pdf;base64,' + home.cvFile 
          };
        });

        if (this.allHomes.length > 0) {
          this.selectedHome = this.allHomes[0];
        }
      },
      error: (err) => {
        console.error("Error fetching homes: ", err);
      }
    });
  }

// ********************************************************************** check language **********************************************************************
  checkLanguage(){
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
  
// ********************************************************************** download CV **********************************************************************
  downloadCV() {
    this.checkLanguage();
    console.log("home "+ this.currentLanguage)
    let fileName = this.currentLanguage === 'fr' ? 'CV FR ACHRAF BEN KAABAR.pdf' : 'CV EN ACHRAF BEN KAABAR.pdf'; // Par défaut EN pour DE aussi
    let filePath = `assets/pdf/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
}
