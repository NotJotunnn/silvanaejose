import type { ListItem } from "../assets/items"

type PaymentPopupProps = {
  setPixCopied: React.Dispatch<React.SetStateAction<boolean>>,
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>,
  selectedItem: ListItem,
  showPopup: boolean,
  pixCopied: boolean,
}

const PaymentPopup = ({ props }: { props: PaymentPopupProps }) => {
  const { setPixCopied, setShowPopup, selectedItem, showPopup, pixCopied } = props

  const closePopup = () => {
    setPixCopied(false)
    setShowPopup(false)
  }

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(selectedItem.payment.code);
      setPixCopied(true)
      console.log('Copied successfully!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div className={`PurchasePopup fixed top-0 left-0 w-screen h-screen flex flex-col justify-end md:justify-center items-center z-20 ${!showPopup ? "pointer-events-none" : ""}`}>
      <div className={`background bg-black/40 cursor-pointer w-full h-full absolute top-0 left-0 transition-all duration-700 ease-in-out ${showPopup ? "opacity-100" : "delay-500 opacity-0"}`} onClick={() => closePopup()}></div>
      <div className={`popup z-10 md:w-101 w-full md:h-101 h-[60dvh] bg-white rounded-t-4xl md:rounded-4xl p-9 flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${showPopup ? "translate-y-0" : "translate-y-[100dvh]"}`}>
        <img className="object-contain h-62.5" src={selectedItem.payment.qrcode} alt={`Qrcode do plano ${selectedItem.name}`} />
        <h2 className="text-[24px] Inter mb-4">{selectedItem.name}</h2>
        <button className={`w-full text-center border rounded-sm cursor-pointer button ${pixCopied ? "bg-[limegreen] bounce border-b-green-900 text-green-900" : "border-black/40"}`} onClick={() => copyPix()}>Pix cópia e cola</button>
      </div>
    </div>
  )
}

export default PaymentPopup