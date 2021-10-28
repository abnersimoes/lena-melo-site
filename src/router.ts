import { Router } from '@vaadin/router';
import routes from './constants/routes';
import './pages/home/home-page';
import './pages/privacy-policy/privacy-policy-page';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes(routes);
