import type { Route } from '@vaadin/router';

export const home = {
  path: '/',
  component: 'home-page',
  action: async () => {
    await import('../pages/home/home-page.js');
  },
};

export const privacyPolicy = {
  path: '/politica-de-privacidade',
  component: 'privacy-policy-page',
  action: async () => {
    await import('../pages/privacy-policy/privacy-policy-page.js');
  },
};

export const notFound = {
  path: '(.*)',
  component: 'not-found-page',
  action: async () => {
    await import('../pages/not-found/not-found-page.js');
  },
};

export const routes: Route[] = [home, privacyPolicy, notFound];
