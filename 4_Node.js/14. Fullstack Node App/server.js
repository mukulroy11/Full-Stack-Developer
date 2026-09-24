import http from "node:http"

const PORT = 8000

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'Get')  
    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'}) // if we set POST in writeHaed it execute above line is ignore because writeHead most priority
    // res.setHeader('Access-Control-Allow-Origin', '*')     //ignore becausesetHeader does not execute after writeHead(set one time not allow modification) 
    // res.setHeader('Access-Control-Allow-Methods', 'Get')  // Both are CORS allow accees to APIs 
    res.end('<html><h1>The server is working!!!</h1></html>') 
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))