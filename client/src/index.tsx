import * as React from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/index.css'

import Room from './views/Room'
import { SocketProvider } from './context/SocketContext'

const domNode = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'room/:id',
    element: <Room />,
  },
])

createRoot(domNode!).render(
  <SocketProvider>
    <RouterProvider router={router} />
  </SocketProvider>,
)
