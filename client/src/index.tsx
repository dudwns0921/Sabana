import * as React from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './styles/index.css'

import { SocketProvider } from './context/SocketContext'
import { Provider } from 'react-redux'
import { store } from './store'
import router from './router'

const domNode = document.getElementById('root')

createRoot(domNode!).render(
  <Provider store={store}>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </Provider>,
)
