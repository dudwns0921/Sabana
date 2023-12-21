import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
  },
})

io.on('connection', (socket) => {
  console.log('a user connected')
})

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
