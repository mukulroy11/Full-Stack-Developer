
// Missing or Mismatched Path:

// Your server expects app.get('/api/users'), but the request sent was GET /users or GET /api/user.

// Wrong HTTP Method:

// You defined app.get('/items'), but a POST or PUT request was sent to /items.
import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(destinations))
    } else {
        res.setHeadeader('Content-Type','application/json');
        res.statusCode = 400
        res.end(JSON.stringify({ error: 'Route Not Found', message: "The requested route does not exist" }));
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))