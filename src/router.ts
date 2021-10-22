import { Router } from '@vaadin/router';
import routes from './constants/routes';
import './pages/home/home-page';
import './pages/privacy-policy/privacy-policy-page';
import './pages/not-found/not-found-page';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes(routes);
