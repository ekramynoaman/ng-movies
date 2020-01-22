import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    userMail: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  saveForm() {
    console.log(this.contactForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
