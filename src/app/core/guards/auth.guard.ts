import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';

export const authGuard = () => {
  const router = inject(Router);
  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/admin/login']);
        resolve(false);
      }
    });
  });
};