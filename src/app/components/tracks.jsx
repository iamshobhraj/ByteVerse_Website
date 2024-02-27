import Image from "next/image";
import ImageGrid from "./ImageGrid";


const Tracks = () => {
  return (
    <section id="tracks" className="flex flex-col gap-12 items-center justify-start w-full h-fit relative pt-12" >
        <h2 className="uppercase font-japanese md:text-7xl mt-16 text-5xl text-center">Tracks</h2>
        <ImageGrid folder="tracks" col={4} />
    </section>
  )
}

export default Tracks
