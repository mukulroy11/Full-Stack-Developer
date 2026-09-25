import { sendResponse } from "../utils/sendResponse.js"
import { getData } from "../utils/getData.js"

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

//handle POST
export function handlePost(req, res) {
    console.log('Post request received')
}