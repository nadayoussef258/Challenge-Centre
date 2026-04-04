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
  form = {
    // بيانات الطالب
    studentName: '',
    studentAge: '',
    diagnosis: '',
    // بيانات ولي الأمر
    parentName: '',
    phone: '',
    // الخدمة
    service: '',
    // ملاحظات
    message: ''
  };

  sent = false;
  loading = false;
  error = '';

  async submitForm() {
    if (!this.form.studentName || !this.form.phone || !this.form.parentName) {
      this.error = 'يرجى ملء اسم الطالب واسم ولي الأمر ورقم الهاتف على الأقل';
      return;
    }
    this.loading = true;
    this.error = '';
    try {
      await addDoc(collection(db, 'contact_requests'), {
        // بيانات الطالب
        name: this.form.studentName,
        studentAge: this.form.studentAge,
        diagnosis: this.form.diagnosis,
        // بيانات ولي الأمر
        parentName: this.form.parentName,
        phone: this.form.phone,
        // الخدمة والملاحظات
        service: this.form.service,
        message: this.form.message,
        // الحالة والوقت
        status: 'new',
        createdAt: serverTimestamp()
      });
      this.sent = true;
      this.form = {
        studentName: '', studentAge: '', diagnosis: '',
        parentName: '', phone: '', service: '', message: ''
      };
      setTimeout(() => { this.sent = false; }, 8000);
    } catch (e) {
      this.error = 'حدث خطأ، يرجى المحاولة مرة أخرى';
    } finally {
      this.loading = false;
    }
  }
}
