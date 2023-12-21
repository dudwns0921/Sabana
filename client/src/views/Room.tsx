import React, { useEffect, useRef } from 'react'

function Room() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  let stream: MediaStream | undefined

  async function getMedia() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })

      if (stream !== null && videoRef.current !== null) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {}
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getMedia()
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
