import path from "node:path"
import fs from 'node:fs/promises'
import { sendResponse } from "./sendResponse.js"
import { getContentType } from "./getContentTyoe.js"

export const serverStatic =  async (req, res, basedir) => {

    const publicDir = path.join(basedir, 'public')
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)

    const ext = path.extname(filePath)
    const contentType = getContentType(ext)
    
    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
    } catch (err) {
        if (err.code === 'ENDENT') {
            const content = await fs.readFile(path.join(publicDir, '404.html'))
            sendResponse(res, 404, 'text/html', content)
        } else {
            sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`)
        }
    }
    
}