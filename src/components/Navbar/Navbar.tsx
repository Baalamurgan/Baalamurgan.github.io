import { Link } from "gatsby"
import React from "react"
import "twin.macro"
import { NavItemsData } from "../../data/NavItemsData"
import { useLocation } from "@reach/router"
import { WindowLocation } from "@reach/router"

const currentTab = (location: WindowLocation<unknown>, path: string) => {
  if (location.pathname === path) {
    return { color: "green" }
  }
}

const Navbar: React.FC = ({}) => {
  const location = useLocation()

  return (
    <div tw="sticky top-0 w-full min-height[10vh] background-color[#171717] flex md:(flex-row gap-4) flex-col items-center justify-center ">
      {NavItemsData.map((item, index) => (
        <div key={index} tw="justify-center px-3 text-white">
          <Link
            to={item.link}
            style={currentTab(location, `${item.link}`)}
            tw="color[red] p-3 rounded-3xl md:hover:(text-black bg-white transition-delay[0.1s]  transition-duration[0.5s])"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Navbar
