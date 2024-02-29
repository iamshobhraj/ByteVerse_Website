import Image from 'next/image'
import { getImagesFromFolder } from "../../lib/files" 

export default async function ImageGrid({ folder, col }) {
  const images = await getImagesFromFolder(folder)
  return (
    <div className='flex flex-wrap justify-center md:8/9 lg:w-2/3 gap-6 z-20'> 
      {images.map(img => (
        <div key={img.src}>
          <div className="card flex flex-col gap-2 bg-[#541E1E4A] p-2 rounded-2xl shadow-lg shadow-[#FFCC47]/[0.14] hover:scale-110 transition duration-500">
            <Image 
              alt='icons'
              src={img.src}
              width={200}
              height={200}
            />
            <p className="text-center font-semibold text-xl text-wrap">{img.name == "ARVR.webp" ? "AR / VR" : img.name.slice(0,-5)}</p>
          </div>  
        </div>
      ))}
    </div>
  )
}

//className={`grid ${(col-1) == 0 ? "grid-cols-1" : ("grid-col-clo"+col)} px-6 md:px-0 md:grid-cols-${col} md:grid-cols-auto-fit gap-4 justify-items-center`}
