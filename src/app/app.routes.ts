import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
       { path: '', loadComponent: () => import('./features/home_page/home_page.component').then(m => m.HomePageComponent) },
      { path: 'admin/login', loadComponent: () => import('./features/admin-login/admin-login.component').then(m => m.AdminLoginComponent) },
      { path: 'admin/dashboard', loadComponent: () => import('./features/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent), canActivate: [authGuard] },
      { path: '**', redirectTo: '' }
];
