import Image from "next/image";
import ImageGrid from "./ImageGrid";
import bg from "@/../public/byteverse/bgsponsor.svg";


const SpecialTracks = () => {
  return (
    <section id="stracks" className="flex flex-col gap-16 items-center justify-start w-full h-fit relative pt-6 pb-6 overflow-hidden" >
        <h2 className="uppercase font-japanese md:text-7xl mt-16 text-5xl text-center z-20">Special Tracks</h2>
        <ImageGrid folder="specialtracks" col={3} />

       <Image
          src={bg}
          className="absolute bottom-0  scale-[1.16] sm:scale-[1.13] md:scale-[1.11] lg:scale-[1.06] w-[100vw] z-10"
        />
        
    </section>
  )
}

export default SpecialTracks
