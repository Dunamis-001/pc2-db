const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

// To handle POST, PUT and PATCH requests, you need to use body-parser middleware (included in jsonServer.defaults)
server.use(jsonServer.bodyParser)

server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
