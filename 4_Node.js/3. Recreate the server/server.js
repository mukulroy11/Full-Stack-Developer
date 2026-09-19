import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.write("This is some data \n")
    res.write("This is some more data \n")
    res.end() //no need of passing string inside end
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))