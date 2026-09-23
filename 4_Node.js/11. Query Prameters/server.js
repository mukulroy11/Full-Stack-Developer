import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)    //Here URL is constructor to crate a new url
    console.log(urlObj)

    const queryObj = Object.fromEntries(urlObj.searchParams) //fromEnteries is a method with url you are searching
    console.log(queryObj)
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))