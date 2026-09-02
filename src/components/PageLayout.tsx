import Header from "./Header"
import Footer from "./Footer"

import { Outlet } from "react-router-dom"

import { useState } from "react"
import SideBar from "./SideBar"

const PageLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      <Header props={{showSideBar, setShowSideBar}} />
      <Outlet />
      <Footer />
      <SideBar props={{showSideBar, setShowSideBar}} />
    </div>
  )
}

export default PageLayout