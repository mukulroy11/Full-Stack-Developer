import http from "node:http"
import path from "node:path"
import fs from 'node:fs'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {

    const pathToResource = path.join(__dirname, 'public', 'index.html')

    const content = fs.readFileSync(pathToResource, 'utf8')

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(content)
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

// Read Files: fs.readFile() — Reads data from a file.

// Create/Write Files: fs.writeFile() — Writes data to a file, replacing the file if it already exists or creating a new one.

// Update Files: fs.appendFile() — Appends specified content to the end of a file.

// Delete Files: fs.unlink() — Removes or deletes a file from the file system.

// Rename Files: fs.rename() — Renames an existing file or directory.