import http from "node:http"
import { serverStatic } from "./utils/serverStatic.js"
import { getData } from "./utils/getData.js"

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {

    await serverStatic(req, res, __dirname)

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
