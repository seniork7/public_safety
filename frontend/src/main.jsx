import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import App from './App.jsx'
import Error404 from './components/pages/Error404.jsx'
import SafetyTips from './components/pages/SafetyTips.jsx'
import AdminLogin from './components/pages/AdminLogin.jsx'
import AdminDashboard from './components/pages/AdminDashboard.jsx'
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
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
