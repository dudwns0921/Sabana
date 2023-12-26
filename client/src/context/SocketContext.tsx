import React, { type ReactNode, createContext, useContext } from 'react'
import { type Socket, io } from 'socket.io-client'

const SocketContext = createContext<Socket | undefined>(undefined)

export const SocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const tabId = Math.random().toString(36)
  console.log('socket connection')
  const socket = io('http://localhost:3000', { query: { tabId } })

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export const useSocket = () => {
  return useContext(SocketContext)
}
