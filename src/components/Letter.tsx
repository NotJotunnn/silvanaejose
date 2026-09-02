import FlowerArrangement from "../assets/flowers/colação de flores.png"

const Letter = () => {
  return(
    <div className="Letter w-full accent-bg py-16.25 flex justify-center items-center overflow-hidden">
      <div className="wrapper w-80.25 relative flex">
        <div className="Letter bg-white z-10 p-2.25">
          <div className="letter-content border border-[#E36292] w-full h-full py-5.25 px-5.75 Inter text-[11px] flex flex-col gap-2.75 italic font-light desc-text">
            <h2 className="mb-[11.5px] font-bold title-text">Obrigada por fazer parte da nossa história ❤️</h2>
            
            <p className="text-justify">Nossa maior alegria é poder celebrar este momento ao lado das pessoas que amamos.</p>

            <p className="text-justify">Cada amigo e familiar que estará conosco no dia 19 de setembro faz parte da nossa caminhada e torna esse dia ainda mais especial. Mais do que presentes, recebemos o carinho, a presença e a torcida de vocês pela nossa nova etapa.</p>

            <p className="text-justify">Agradecemos por todo amor, pelas mensagens, pelas orações e por compartilharem conosco esse momento tão esperado.</p>

            <p className="text-justify">Que possamos guardar para sempre na memória a alegria de ter vocês ao nosso lado neste dia tão importante.</p>

            <p className="text-justify">
              Com todo nosso carinho, <br />
              Silvana e José ❤️
            </p>
          </div>
        </div>
        <img className="absolute bottom-0 left-0 translate-y-20 -translate-x-16" src={FlowerArrangement} alt="Colação de flores" />
        <img className="absolute top-0 right-0 -translate-y-20 translate-x-16 rotate-180" src={FlowerArrangement} alt="Colação de flores" />
      </div>
    </div>
  )
}

export default Letter