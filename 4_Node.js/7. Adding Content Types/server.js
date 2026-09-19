// application/json: Used for returning JSON-formatted data objects, common in APIs.

// text/html: Used when sending HTML web page documents to be rendered by a browser.

// text/css: Used for CSS stylesheets.

// application/javascript: Used for Javascript files and logic

//  the response.setHeader(name, value) method is used 
// to set a single HTTP header for a response. 
// It saves the header configuration internally without immediately sending it over the network, 
// allowing you to update or modify headers as many times as needed before sending data back to the client

import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(destinations))
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))