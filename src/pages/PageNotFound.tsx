import Desconectado from "../assets/icons/unplugged.png"

const PageNotFound = () => {
  return (
    <div className="mt-20 h-[60dvh] flex flex-col justify-center items-center">
      <img className="w-40 flor-amigavel mb-5" src={Desconectado} alt="Imagem de desconectado" />
      <h2>Oops, parece que saiu do site!</h2>
      <p className="desc-text"><a href="/">Gostaria de voltar à navegar?</a></p>
    </div>
  )
}

export default PageNotFound