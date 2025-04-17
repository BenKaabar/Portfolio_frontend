import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './../../services/Contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  CreateContactform!: FormGroup;
  allServices: Service[] = [];
  selectedService: Service | null = null;

  constructor(private contactService: ContactService, 
    private formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.initializeCreateContactform();
  }

// ********************************************************************** Create Employer **********************************************************************
  initializeCreateContactform(): void {
    this.CreateContactform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9 ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', [Validators.required]],
      message: ['']
    });
  }

  CreateContact() {
    if (this.CreateContactform.valid) {
      const fournisseurDTO = {
        firstName: this.CreateContactform.value.firstname,
        lastName: this.CreateContactform.value.lastname,
        phone: this.CreateContactform.value.phone,
        email: this.CreateContactform.value.email,
        service: this.CreateContactform.value.service,
        message: this.CreateContactform.value.message
      };

      this.contactService.CreateContact(fournisseurDTO).subscribe({
        next: (response) => {
          this.CreateContactform.reset();
        }      
      })
    }else {
      console.log('Formulaire invalide');
    }
  }
}
