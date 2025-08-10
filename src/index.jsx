import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { Login } from './pages/auth/pages/login';
import { Register } from './pages/auth/pages/register';
import { DashboardUser } from './pages/dashboard/user';
import { Charts } from './pages/dashboard/user/pages/charts';
import { LoggedLayout } from './layouts/LoggedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/auth',
    Component: Auth,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: '/logged',
    Component: LoggedLayout,
    children: [
      {
        path: 'dashboard',
        Component: DashboardUser,
        children: [
          {
            path: 'charts',
            Component: Charts,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
