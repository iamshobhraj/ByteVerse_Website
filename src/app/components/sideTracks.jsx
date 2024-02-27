import Image from "next/image";
import ImageGrid from "./ImageGrid";


const SideTracks = () => {
  return (
    <section id="sidetracks" className="flex flex-col gap-16 items-center justify-start w-full h-fit relative pt-6 " >
        <h2 className="uppercase font-japanese md:text-7xl mt-16 text-5xl text-center " style={{ zIndex: "10" }}>Special Side Tracks</h2>
        <ImageGrid folder="specialsidetrack" col={1} />
    </section>
  )
}

export default SideTracks
