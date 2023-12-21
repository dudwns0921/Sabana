import React, { type ReactNode, createContext, useContext } from 'react'
import { type Socket, io } from 'socket.io-client'

const SocketContext = createContext<Socket | undefined>(undefined)

export const SocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const socket = io('http://localhost:3000')
  socket.on('welcome', () => {
    console.log('someone joined')
  })

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export const useSocket = () => {
  return useContext(SocketContext)
}
