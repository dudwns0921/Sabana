import * as React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Room from '../views/Room'

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

export default router
