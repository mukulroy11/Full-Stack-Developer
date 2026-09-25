import http from "node:http"
import { serverStatic } from "./utils/serverStatic.js"
import { handleGet } from  './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {

    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        } 

    } else if (!req.url.startsWith('/api')) {

        return await serverStatic(req, res, __dirname)

    }

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
