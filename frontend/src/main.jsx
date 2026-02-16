import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import App from './App.jsx'
import Error404 from './pages/Error404.jsx'
import SafetyTips from './pages/SafetyTips.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminSafetyAlerts from './components/dashboard/AdminSafetyAlerts.jsx'
import Reports from './components/dashboard/Reports.jsx'
import AdminSettings from './components/dashboard/AdminSettings.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import 'tippy.js/dist/tippy.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: '/safety-tip/:id',
    element: <SafetyTips />,
    errorElement: <Error404 />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
    errorElement: <Error404 />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/admin/dashboard/safety-alerts',
        element: <AdminSafetyAlerts />,
        errorElement: <Error404 />,
      },
      {
        path: '/admin/dashboard/reports',
        element: <Reports />,
        errorElement: <Error404 />,
      },
      {
        path: '/admin/dashboard/settings',
        element: <AdminSettings />,
        errorElement: <Error404 />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
