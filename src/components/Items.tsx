import { list, type ListItem } from "../assets/items"

type ItemsProps = {
  setSelectedItem: React.Dispatch<React.SetStateAction<ListItem>>,
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

const Items = ({ props }: { props: ItemsProps }) => {
  const { setSelectedItem, setShowPopup } = props
  
  const selectItem = (item: ListItem) => {
    setSelectedItem(item)
    setTimeout(() => {
      setShowPopup(true)
    }, 400);
  }
  return (
    <div className="Gifts w-full py-11 title-text flex flex-col justify-center items-center">
      <h2 className="GreatVibes text-[38px] mb-4">Presentes</h2>
      <p className="desc-text italic mb-7 w-80 text-center">Preparamos com carinho a seguinte lista  abaixo, nela temos alguns itens simbólicos e ilustrativos. Os valores serão recebidos via Pix e todo dinheiro arrecadado ajudará nos custos do casamento.</p>
      <div className="grid grid-cols-2 gap-3">
        {list.map(item => (
          <div onClick={() => selectItem(item)} className="w-29.5 min-h-42.25 cursor-pointer p-2 bg-[#d9d9d95e] text-black rounded-[7px] Inter">
            <img className="object-cover w-25 h-25 rounded-[7px] mb-3" src={item.image} alt={`Descrição de ${item.name}`} />
            <h3>{item.name}</h3>
            <h4 className="opacity-50 title-text">{item.name !== "Personalizado" ? `R${item.payment.cost.toString()},00` : <span className="text-[8px]">Defina seu próprio valor!</span>
          }</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Items