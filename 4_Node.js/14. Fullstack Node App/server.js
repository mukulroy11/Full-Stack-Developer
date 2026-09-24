import http from "node:http"

const PORT = 8000

console.log(import.meta.dirname) // give the path of file

const __dirname = import.meta.dirname // underscore(__) is use to set global variable
const filepatn = `${__dirname}/public/index.html`

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end()
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))