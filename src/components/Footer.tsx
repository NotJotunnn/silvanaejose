import PWPhoto1 from "../assets/prewedding/IMG_3708.png"
import PWPhoto2 from "../assets/prewedding/IMG_3709.png"
import PWPhoto3 from "../assets/prewedding/IMG_3721.png"
import PWPhoto4 from "../assets/prewedding/IMG_3711.png"

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="wrapper max-w-270">
        <h2 className="text-[38px] title-text GreatVibes text-center mb-2.75">Nos vemos lá!</h2>
        <div className="columns flex gap-2.75">
          <div className="row flex flex-col gap-2.75">
              <img className="image overflow-hidden w-51 h-58.75 object-cover object-bottom" src={PWPhoto1} alt="Foto da galeria de Pré wedding"/>
              <img className="image overflow-hidden w-51 h-67.75 object-cover bg-red-500" src={PWPhoto2} alt="Foto da galeria de Pré wedding"/>
          </div>
          <div className="row flex flex-col gap-2.75">
              <img className="overflow-hidden w-51 h-67.75 object-cover" src={PWPhoto3} alt="Foto da galeria de Pré wedding"/>
              <img className="image overflow-hidden w-51 h-58.75 object-cover object-bottom" src={PWPhoto4} alt="Foto da galeria de Pré wedding"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer