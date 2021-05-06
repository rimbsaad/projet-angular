import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.minLength(6)]),
        textarea: new FormControl('', [Validators.required, Validators.minLength(6)]),

      }
    )
  }

}
