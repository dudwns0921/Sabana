import React from 'react'
import { useSocket } from './context/SocketContext'
import { useNavigate } from 'react-router-dom'
import { set } from './store/roomIdSlice'
import { useAppDispatch, useAppSelector } from './store/hooks'

function App() {
  const roomId = useAppSelector((state) => state.roomId.value)
  const dispatch = useAppDispatch()
  const socket = useSocket()
  const navigate = useNavigate()

  function gotoRoom(e: React.FormEvent) {
    e.preventDefault()
    socket?.emit('join_room', roomId)
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
              dispatch(set(e.target.value))
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
