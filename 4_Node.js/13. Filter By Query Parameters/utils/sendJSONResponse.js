export const  sendJSONResponse = (res, statusCode, payLoad) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')      //CORS
    res.setHeader('Access-Control-Allow-Methods', '*GET') //CORS
    res.statusCode = statusCode
    res.end(JSON.stringify(payLoad))
}