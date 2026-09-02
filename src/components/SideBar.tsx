import PWPhoto3 from "../assets/prewedding/IMG_3710.png"
import Flower from "../assets/flowers/flor.png"
import { useNavigate } from "react-router-dom";

type SideBarParams = {
  showSideBar: boolean,
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>,
}

const SideBar = ({ props }: { props: SideBarParams }) => {
  const { showSideBar, setShowSideBar } = props;
  const navigate = useNavigate()

  const travelToPage = (page: string) => {
    setTimeout(() => 
      setShowSideBar(false)
    , 1000)

    navigate(page, { replace: true })
  }

  return (
    <div className={`Sidebar z-10 fixed bottom-full flex flex-col justify-center items-center bg-white w-full h-screen transition-transform duration-700 ease-in-out ${showSideBar ? "translate-y-full" : ""}`}>
      <ul className="title-text text-center gap-5.75 flex flex-col mb-36 text-[38px] Inter mt-20">
        <li className="hover:cursor-pointer" onClick={() => travelToPage("/")}>Início</li>
        <li className="hover:cursor-pointer" onClick={() => travelToPage("/presentes")}>Presentes</li>
      </ul>
      <img className="overflow-hidden w-43.5 h-56 object-bottom object-cover rounded-t-full mb-22.75" src={PWPhoto3} alt="Foto da galeria de Pré wedding"/>
      <div className="mb-20 z-10 flex flex-col justify-center items-center gap-4">
        <h2 className="date accent-text Inter italic text-[24px] text-center">19 - 09 - 2026</h2>
        <img className="w-10.5 h-10 flor-amigavel" src={Flower} alt="Flor simples" />
      </div>
    </div>
  )
}

export default SideBar