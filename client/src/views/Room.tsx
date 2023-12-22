import React, { useEffect, useRef } from 'react'
import { useSocket } from '../context/SocketContext'

function Room() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const socket = useSocket()

  let stream: MediaStream | undefined
  let myPeerConnection: RTCPeerConnection | undefined

  async function initialize() {
    stream = await getMedia()

    if (stream !== null && stream !== undefined) {
      if (videoRef.current !== null) videoRef.current.srcObject = stream
      makeConnection()
      socket?.on('welcome', async () => {
        const offer = await myPeerConnection?.createOffer()
        socket.emit('offer', offer)
      })
      socket?.on('offer', async (offer) => {
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
        className='w-full h-full'
        autoPlay
        playsInline
      ></video>
    </>
  )
}

export default Room
