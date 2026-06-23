import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'issues',
    loadComponent: () =>
      import('./modules/issues/pages/issues-list/issues-list').then(m=>m.IssuesList),
  },
  {
    path: 'issue/:number',
    loadComponent: () =>
      import('./modules/issues/pages/issue-page/issue-page').then(m=> m.IssuePage),
  },

  {
    path: '**',
    redirectTo: 'issues',
  },
];
