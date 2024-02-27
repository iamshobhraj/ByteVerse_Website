import fs from 'fs'
import path from 'path'

export async function getImagesFromFolder(dir) {

    const folderPath = path.join(process.cwd(), 'public/icons' , dir)
  
    const files = await fs.promises.readdir(folderPath)
  
    return files.map(file => {
      return {
        src: `/icons/${dir}/${file}`,
        name: file
      }
    })
  
  }
