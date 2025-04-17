import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/Language/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isNavbarCollapsed: boolean = true;
  isSidebarVisible : boolean = false;
  isDarkMode = false;  
  currentLanguage = 'En';
  currentFlag = 'assets/images/gb.png';
  dropdownOpen = false;

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    const storedDarkMode = localStorage.getItem('darkMode');
    this.isDarkMode = storedDarkMode === 'true';
    this.applyDarkMode();
  }

  ngOnInit() {
    this.checkScreenSize();
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  switchLanguage(language: string, flag: string) {
    this.currentLanguage = language === 'en' ? 'En' : language === 'fr' ? 'Fr' : 'De';
    this.currentFlag = flag;
    this.translate.use(language);
    this.languageService.setLanguage(language);
    this.dropdownOpen = false;
  }  
  @HostListener('window:resize', ['$event'])
  onResize() { 
    this.checkScreenSize();
  }
  toggleSidebar(){
    this.isSidebarVisible  = !this.isSidebarVisible ;
  } 
  checkScreenSize() {
    this.isNavbarCollapsed = window.innerWidth <= 575;
  }
  applyDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  
}
