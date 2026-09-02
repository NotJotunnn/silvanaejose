import { useState } from "react"
import { list, type ListItem } from "../assets/items"
import Hero from "../components/Hero"
import Items from "../components/Items"
import PaymentPopup from "../components/PaymentPopup"

const GiftShop = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ListItem>(list[0])


  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <Hero />
      <Items props={{setShowPopup, setSelectedItem}}/>
      <PaymentPopup props={{showPopup, pixCopied, setPixCopied, selectedItem, setShowPopup}}/>
    </div>
  )
}

export default GiftShop