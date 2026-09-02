import Church from "../assets/Igreja.svg"
import Flower from "../assets/flowers/flor.png"

const Hero = () => {
  return (
    <div className="hero accent-bg overflow-hidden w-full flex flex-col justify-center items-center">
      <div className="wrapper flex flex-col max-w-270 w-full h-193.25 pt-5 relative justify-between">
        <h1 className="z-10 text-center GreatVibes text-[50px] title-text mt-20">Silvana e José</h1>
        <div className="mb-20 z-10 flex flex-col justify-center items-center gap-4">
          <h2 className="date accent-text Inter italic text-[24px] text-center">19 - 09 - 2026</h2>
          <img className="w-12.5 h-12.5 flor-amigavel" src={Flower} alt="Flor simples" />
        </div>
        <img className="h-full object-cover object-left absolute top-11.75" src={Church} alt="ilustração da igreja da cerimônia" />
      </div>
    </div>
  )
}

export default Hero