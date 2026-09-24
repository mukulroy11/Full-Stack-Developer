import http from "node:http"
import path from "node:path"


const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {

    const absPathToResource = path.join(__dirname, 'public', 'index.html')
    const relPathToResource = path.join('public', 'index.html')
    console.log('absolute: ', absPathToResource)
    console.log('relative: ', relPathToResource)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end()
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))