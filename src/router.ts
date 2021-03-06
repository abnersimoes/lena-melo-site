import { Router } from '@vaadin/router';
import type { Params } from '@vaadin/router';
import { routes } from './constants/routes.js';

const router = new Router();

router.setRoutes([
  {
    path: '(.*)/',
    action: (context, commands) => {
      const newPath = context.pathname.slice(0, -1);
      return commands.redirect(newPath);
    },
  },
  ...routes,
]);

export const attachRouter = (outlet: HTMLElement) => {
  router.setOutlet(outlet);
};

export const urlForName = (name: string, params?: Params) =>
  router.urlForName(name, params);
