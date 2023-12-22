import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
  },
})

io.on('connection', (socket) => {
  socket.on('join_room', async (roomId) => {
    console.log('join room')
    await socket.join(roomId)
    socket.to(roomId).emit('welcome')
  })
  socket.on('offer', (offer, roomId) => {
    socket.to(roomId).emit('offer', offer)
  })
})

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
