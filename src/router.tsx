import { createReactRouter, createRouteConfig, createRoute, Link, Outlet } from '@tanstack/react-router'
import RootPage from './pages/rootPage';
import Home from './pages/home'
import About from './pages/about'

const rootRoute = createRouteConfig({
    component: RootPage
  });
  const indexRoute = rootRoute.createRoute({
    path: '/',
    component: Home,
  });
  const aboutRoute = rootRoute.createRoute({
    path: '/about',
    component: About,
  });
  const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);
  const router = createReactRouter({routeConfig});

  export default router;