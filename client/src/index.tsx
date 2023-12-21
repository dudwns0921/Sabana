import * as React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/index.css'

const domNode = document.getElementById('root')

createRoot(domNode!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
