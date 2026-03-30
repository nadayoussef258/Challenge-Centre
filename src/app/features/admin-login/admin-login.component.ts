import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(private router: Router) {}

  async login() {
    if (!this.email || !this.password) {
      this.error = 'يرجى إدخال الإيميل وكلمة المرور';
      return;
    }
    this.loading = true;
    this.error = '';
    try {
      await signInWithEmailAndPassword(auth, this.email, this.password);
      this.router.navigate(['/admin/dashboard']);
    } catch (e: any) {
      this.error = 'بيانات الدخول غير صحيحة، يرجى المحاولة مرة أخرى';
    } finally {
      this.loading = false;
    }
  }
}