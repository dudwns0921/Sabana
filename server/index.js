import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
  },
})
io.of()
io.on('connection', (socket) => {
  console.log(socket.handshake.query.tabId)
  socket.on('join_room', async (roomId) => {
    console.log(`someone joined room ${roomId}`)
    await socket.join(roomId)
    socket.to(roomId).emit('welcome')
  })
  socket.on('offer', (offer, roomId) => {
    console.log('received offer')
    socket.emit('offer', offer)
  })
})

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
