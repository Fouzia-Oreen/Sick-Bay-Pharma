import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,  RouterProvider, Route, Routes } from 'react-router-dom';
import User from './users/pages/User.jsx';
import Dashboard from './admin/pages/Dashboard.jsx';
import Admin from './admin/Admin.jsx';
import AddProducts from './admin/pages/AddProducts.jsx';
import About from './users/pages/About.jsx';
import Contact from './users/pages/Contact.jsx';
import Login from './users/pages/auth/Login.jsx';
import ForgotPasswordPage from './users/pages/auth/ForgotPasswordPage.jsx';

import Trending from './admin/pages/Trending.jsx';
import Register from './users/pages/auth/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
      {/* all routes */}
      <Route path="/" element={<App />} >
        <Route index element={<User />} />
        {/* auth-routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        {/* user-routes */}
        <Route path="about" element={<About />} />
        <Route element={<Contact />} />
      </Route>

      {/* admin routes */}
      <Route path="admin">
        <Route index element={<Dashboard />} />
        <Route path="add" element={<AddProducts />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Route>

    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
