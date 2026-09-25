import path from "node:path"

export const serverStatic = (basedir) => {
    const filePath = path.join(basedir, 'public', 'index.html')
    console.log(filePath)
}

// export function serverStatic(basedir) {
//     const filePath = path.join(basedir, 'public', 'index.html')
//     console.log(filePath)
// }