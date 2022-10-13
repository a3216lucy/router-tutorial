const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db/index.js')
const middlewares = jsonServer.defaults()

server.use(middlewares)

/** 取得所有書籍 */
server.post('/api/books', (req, res) => {
  res.status(200).json(db.books)
})

/** 取得所有書籍 */
// server.get('/api/books', (req, res) => {
//   res.status(200).json(db.books)
// })

server.listen(3000, () => {
  console.log('JSON Server is running')
})
