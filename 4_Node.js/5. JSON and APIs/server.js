import http from 'node:http'

const PORT = 8000

const animal = {
    type: 'elephant',
    nickName: 'motu'
}

console.log(typeof animal)
console.log(typeof JSON.stringify(animal))

const server = http.createServer((req, res) => {
    res.end("from server")
})

server.listen(PORT, () => console.log(`Connecte on port: ${PORT}`))