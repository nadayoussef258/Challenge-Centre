import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase.config';

@Component({
  selector: 'app-contact',
  imports:[CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
form = { name: '', phone: '', service: '', age: '', message: '' };
  sent = false;
  loading = false;
  error = '';

  async submitForm() {
    if (!this.form.name || !this.form.phone) {
      this.error = 'يرجى ملء الاسم ورقم الهاتف على الأقل';
      return;
    }
    this.loading = true;
    this.error = '';
    try {
      await addDoc(collection(db, 'contact_requests'), {
        name: this.form.name,
        phone: this.form.phone,
        service: this.form.service,
        age: this.form.age,
        message: this.form.message,
        status: 'new',
        createdAt: serverTimestamp()
      });
      this.sent = true;
      this.form = { name: '', phone: '', service: '', age: '', message: '' };
      setTimeout(() => { this.sent = false; }, 6000);
    } catch (e) {
      this.error = 'حدث خطأ، يرجى المحاولة مرة أخرى';
    } finally {
      this.loading = false;
    }
  }
}
