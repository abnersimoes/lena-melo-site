export const home = {
  path: '/',
  component: 'home-page',
};

export const privacyPolicy = {
  path: '/politica-de-privacidade',
  component: 'privacy-policy-page',
};

export const notFound = {
  path: '(.*)',
  redirect: home.path,
};

export default [home, privacyPolicy, notFound];
