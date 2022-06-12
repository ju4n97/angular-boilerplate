import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'accessibility',
    title: 'Accessibility settings',
    loadComponent: async () => (await import('./accessibility/accessibility.page')).AccessibilityPage,
  },
  {
    path: 'account',
    title: 'Account settings',
    loadComponent: async () => (await import('./account/account.page')).AccountPage,
  },
  {
    path: 'appearance',
    title: 'Appearance settings',
    loadComponent: async () => (await import('./appearance/appearance.page')).AppearancePage,
  },
];
