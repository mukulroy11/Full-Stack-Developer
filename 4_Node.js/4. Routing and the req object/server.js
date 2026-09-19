// URL (req.url / req.path): The exact path or URL the client used to make the request.

// Headers (req.headers): Metadata sent with the request, such as authentication tokens, user agent info, and content types.

// Data / Body (req.body): Payload sent by the client, commonly used in POST or PUT requests to send JSON data or form inputs.

// HTTP Method (req.method): The action being performed, such as GET, POST, PUT, or DELETE.

// Query Parameters (req.query): Key-value pairs extracted from the URL query string (e.g., ?search=javascript).

// Route Parameters (req.params): Dynamic values captured from route paths (e.g., /users/:id).



import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url === '/api' && req.method === 'GET') {
        res.end("this is from the server")
    }
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))