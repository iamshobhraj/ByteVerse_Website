import Image from "next/image";

import timeline from "@/../public/byteverse/timeline.svg";
import zen from "@/../public/byteverse/zen.svg";

const Schedule = () => {
  return (
    <section id="schedule" className="flex flex-col items-center justify-start w-full h-max sm:h-[200vh] lg:h-[350vh] relative py-36" style={{background: "linear-gradient(to bottom, #000000 0%, #570d01 40%,#570d01 55%, #080808 58%, #570d01 85%, #730d0d 100%"}}>
        <h2 className="uppercase font-japanese md:text-7xl text-5xl">Schedule</h2>
        <Image
            alt="timeline"
            src={timeline}
            className="w-full p-10 z-10 lg:h-[130rem]"
        />
        <Image alt="zen" src={zen} className="w-full absolute  lg:top-[26%] top-[44%]"/>
    </section>
  )
}

export default Schedule