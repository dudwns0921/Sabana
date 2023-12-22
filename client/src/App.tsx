import React, { useState } from 'react'
import { useSocket } from './context/SocketContext'
import { useNavigate } from 'react-router-dom'
import roomIdSlice from './store/roomIdSlice'

function App() {
  const [roomId, setRoomId] = useState('')
  const socket = useSocket()
  const navigate = useNavigate()

  function gotoRoom(e: React.FormEvent) {
    e.preventDefault()
    socket?.emit('join_room', roomId)
    setRoomId('')
    navigate(`/room/${roomId}`)
  }
  return (
    <>
      <div>
        <form
          className='flex flex-col'
          onSubmit={(e: React.FormEvent) => {
            gotoRoom(e)
          }}
        >
          <input
            type='text'
            value={roomId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              roomIdSlice.actions.set(e.target.value)
            }}
            className='border border-black'
          ></input>
          <button type='submit'>방 생성하기</button>
        </form>
      </div>
    </>
  )
}

export default App
