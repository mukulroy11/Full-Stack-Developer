import { sendResponse } from "../utils/sendResponse.js"
import { getData } from "../utils/getData.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

//handle POST
export async function handlePost(req, res) {
    const rawBody = await parseJSONBody()
}