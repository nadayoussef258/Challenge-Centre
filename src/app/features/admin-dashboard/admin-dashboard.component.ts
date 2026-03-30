import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { auth, db } from '../../firebase.config';
import { signOut } from 'firebase/auth';
import {
  collection, query, orderBy, onSnapshot,
  doc, updateDoc, deleteDoc, Timestamp
} from 'firebase/firestore';

export interface ContactRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  age: string;
  message: string;
  status: 'new' | 'contacted' | 'enrolled' | 'closed';
  createdAt: Timestamp;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  requests: ContactRequest[] = [];
  filtered: ContactRequest[] = [];
  loading = true;
  activeFilter = 'all';
  activeRequest: ContactRequest | null = null;
  userEmail = auth.currentUser?.email || '';

  statusLabels: Record<string, string> = {
    new: 'جديد',
    contacted: 'تم التواصل',
    enrolled: 'تسجّل',
    closed: 'مغلق'
  };

  statusColors: Record<string, string> = {
    new: 'badge-new',
    contacted: 'badge-contacted',
    enrolled: 'badge-enrolled',
    closed: 'badge-closed'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const q = query(collection(db, 'contact_requests'), orderBy('createdAt', 'desc'));
    onSnapshot(q, (snap) => {
      this.requests = snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      } as ContactRequest));
      this.applyFilter(this.activeFilter);
      this.loading = false;
    });
  }

  applyFilter(f: string) {
    this.activeFilter = f;
    this.filtered = f === 'all' ? this.requests : this.requests.filter(r => r.status === f);
  }

  get counts() {
    return {
      all: this.requests.length,
      new: this.requests.filter(r => r.status === 'new').length,
      contacted: this.requests.filter(r => r.status === 'contacted').length,
      enrolled: this.requests.filter(r => r.status === 'enrolled').length,
      closed: this.requests.filter(r => r.status === 'closed').length,
    };
  }

  async updateStatus(id: string, status: string) {
    await updateDoc(doc(db, 'contact_requests', id), { status });
    if (this.activeRequest?.id === id) {
      this.activeRequest = { ...this.activeRequest, status: status as any };
    }
  }

  async deleteRequest(id: string) {
    if (!confirm('هل أنت متأكد من حذف هذا الطلب؟')) return;
    await deleteDoc(doc(db, 'contact_requests', id));
    this.activeRequest = null;
  }

  openRequest(r: ContactRequest) {
    this.activeRequest = r;
  }

  closeRequest() { this.activeRequest = null; }

  formatDate(ts: Timestamp): string {
    if (!ts) return '—';
    const d = ts.toDate();
    return d.toLocaleDateString('ar-AE', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  async logout() {
    await signOut(auth);
    this.router.navigate(['/admin/login']);
  }
}