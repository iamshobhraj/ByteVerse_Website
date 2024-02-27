import ImageGrid from "./ImageGrid";


const Theem = () => {
  return (
    <section id="theme" className="flex flex-col gap-16 items-center justify-start w-full h-fit relative pt-6">
        <h2 className="uppercase font-japanese md:text-7xl mt-16 text-5xl text-center">Themes</h2>
        <ImageGrid folder="themes" col={4} />
    </section>
  )
}

export default Theem
