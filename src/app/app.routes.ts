import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'checklists',
    loadComponent: () => import('./checklists/checklists.component').then((m) => m.ChecklistsComponent),
  },
  {
    path: 'checklist',
    loadComponent: () => import('./checklist/checklist.component').then((m) => m.ChecklistComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
