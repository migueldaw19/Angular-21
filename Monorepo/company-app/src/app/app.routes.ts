import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/admin/layouts/admin-layout/admin-layout').then(m => m.AdminLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/admin/pages/summary/summary').then(m => m.Summary,
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./modules/admin/pages/projects/projects').then(m => m.Projects),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];