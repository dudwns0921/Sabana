import React, { useEffect, useRef } from 'react'
import { useSocket } from '../context/SocketContext'
import { useAppSelector } from '../store/hooks'

function Room() {
  const roomId = useAppSelector((state) => state.roomId.value)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const socket = useSocket()

  let stream: MediaStream | undefined
  let myPeerConnection: RTCPeerConnection | undefined

  async function initialize() {
    console.log('init')
    stream = await getMedia()

    if (stream !== null && stream !== undefined) {
      if (videoRef.current !== null) videoRef.current.srcObject = stream
      makeConnection()
      socket?.on('welcome', async () => {
        console.log('received welcome event')
        const offer = await myPeerConnection?.createOffer()
        await myPeerConnection?.setLocalDescription(offer)
        console.log('sending offer')
        socket.emit('offer', offer, roomId)
      })
      socket?.on('offer', (offer) => {
        console.log('received offer')
        console.log(offer)
      })
    }
  }

  async function getMedia() {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    })

    return stream
  }

  function makeConnection() {
    myPeerConnection = new RTCPeerConnection()
    stream?.getTracks().forEach((track) => {
      myPeerConnection?.addTrack(track)
    })
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    initialize()
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        className='w-1/3 h-1/3'
        autoPlay
        playsInline
      ></video>
    </>
  )
}

export default Room
