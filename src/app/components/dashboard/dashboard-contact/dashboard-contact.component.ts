import { ContactService } from './../../../services/Contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-contact',
  templateUrl: './dashboard-contact.component.html',
  styleUrls: ['./dashboard-contact.component.css']
})
export class DashboardContactComponent implements OnInit{
  allContact: Contact[] = [];
  selectedContact:Contact | null = null;
  isModalOpen = false;

  constructor(private contactService: ContactService,
           private authService: AuthService,
           private router: Router){}
  
  ngOnInit(): void {
    this.getAllContact();
  }

// ********************************************************************** Display Contact **********************************************************************
  getAllContact() {
    this.contactService.AllContact().subscribe({
      next: (response)=>{
        this.allContact = response;
      },
    })
  }

// ********************************************************************** Logout **********************************************************************
  Logout(){
    this.authService.Logout()
    this.router.navigateByUrl("/Home")
  }

//  ********************************************************************** Consulting **********************************************************************
  openModal(contact: Contact) {
    this.selectedContact = contact;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

//  ********************************************************************** delete **********************************************************************
  toDelete(idContact: string): void{
    this.contactService.deleteContact(idContact).subscribe({
      next:(response)=>{
        this.allContact = this.allContact.filter(contact => contact.idContact !== idContact);
        this.getAllContact();
      },
    });
  }
  
}
