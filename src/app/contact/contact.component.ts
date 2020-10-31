
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private fb: FormBuilder,    
    ) { }

  ngOnInit() { 
     
  }

  contactForm = this.fb.group({
    uName : ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(8)]],
    message: ['', Validators.required]
  })


  contactFormSubmit(a){  
   
      let val = a.value;    
      let name = this.contactForm.controls['uName'].value;
      let email = this.contactForm.controls['email'].value;
      let subject = this.contactForm.controls['subject'].value;
      let message = this.contactForm.controls['message'].value;
  
      let print = `Hi ${name}\nYour Mail Id Is: ${email}\nThank You For Your Message`
      alert(print); 

      this.contactForm.reset();
      this.contactForm.markAsPristine;
      this.contactForm.markAsUntouched;
      

  }

}
