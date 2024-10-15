import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/index.css'

import HomePage from './pages/HomePage.jsx'
import PostPage from './pages/PostPage.jsx'
import AdminPage from './pages/AdminPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/post/:postId',
    element: <PostPage/>
  },
  {
    path: '/admin',
    element: <AdminPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
