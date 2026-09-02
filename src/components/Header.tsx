import Logo from "../assets/logo.png"
import Menu from "../assets/icons/menu.svg"
import Close from "../assets/icons/Close.svg"

type HeaderParams = {
  showSideBar: boolean,
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ props }: { props: HeaderParams }) => {
  const { showSideBar, setShowSideBar } = props;

  const toggleSideBar = () => {
    setShowSideBar(prev => !prev)
  }

  return (
    <div className="w-full flex items-center justify-center bg-white sticky top-0 z-20">
      <div className="wrapper max-w-270 flex justify-between w-full px-4.5 py-2.25">
        <img src={Logo} alt="Logo de casamento de Silvana E josé" />
        <button className="hover:cursor-pointer"><img onClick={toggleSideBar} src={!showSideBar ? Menu : Close} alt="Botão menu para abrir e fechar a sidebar" /></button>
      </div>
    </div>
  )
}

export default Header