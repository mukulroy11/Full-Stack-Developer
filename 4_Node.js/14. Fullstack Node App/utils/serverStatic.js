import path from "node:path"
import fs from 'node:fs/promises'
import { sendResponse } from "./sendResponse.js"

export const serverStatic =  async (req, res, basedir) => {

    const filePath = path.join(basedir, 'public', 'index.html')
    
    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)
    } catch (err) {
        console.log(err)
    }
    
}