import * as React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/index.css'

import { io } from 'socket.io-client' // Rename the imported function

console.log('hi')

const socket = io('http://localhost:3000') // Use the renamed function

const domNode = document.getElementById('root')

createRoot(domNode!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
