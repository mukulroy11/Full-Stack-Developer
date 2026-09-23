import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataPathPrams } from './utils/getDataPAthParams.js'


const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)

    if (urlObj.pathname === '/api' && req.method === 'GET') { //using (urlObj)pathname property because pathname stay constant it strip the query strings and just give relative url
        let filteredData = getDataByQueryParams(destinations, queryObj)

        console.log(queryObj)

        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

        const continent = req.url.split('/').pop()
        
        const filteredData = getDataPathPrams(destinations, 'continent', continent)

        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith('/api/country') && req.method === 'GET') {

        const country= req.url.split('/').pop()
        
        const filteredData = getDataPathPrams(destinations, 'country', country)

        sendJSONResponse(res, 200, filteredData)

    } else {

        sendJSONResponse(res, 404, {
            error: 'Route Not Found', 
            message: "The requested route does not exist"
        })

    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))