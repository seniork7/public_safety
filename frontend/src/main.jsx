import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import { AuthProvider } from './store/AuthContext'
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
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
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
    path: '/admin',
    // element: <ProtectedRoute><Outlet /></ProtectedRoute>,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'safety-alerts', element: <AdminSafetyAlerts /> },
          { path: 'reports', element: <Reports /> },
          { path: 'settings', element: <AdminSettings /> },
        ]
      },
      { path: 'login', element: <AdminLogin /> }
    ]
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
    errorElement: <Error404 />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
