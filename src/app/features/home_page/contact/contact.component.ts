import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports:[CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 form = { name: '', phone: '', service: '', age: '', message: '' };
  sent = false;

  submitForm() {
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
      this.form = { name: '', phone: '', service: '', age: '', message: '' };
    }, 5000);
  }
}
