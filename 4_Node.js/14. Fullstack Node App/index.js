//Global vars in node
//Both work when we set type = commonJS
// console.log(__dirname)
// console.log(__filename)

/* using import.meta */

// console.log(import.meta.dirname)
// console.log(import.meta.filename)

/* ES Modules before v20 */

import path from 'node:path'
import url from 'node:url'

const __dirname = url.fileURLToPath(import.meta.url)
const __filename = path.dirname(__filename)

console.log(__dirname)
console.log(__filename)