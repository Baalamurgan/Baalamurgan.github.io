import { Link } from "gatsby"
import React, { useEffect } from "react"
import "twin.macro"
import { NavItemsData } from "../../data/NavItemsData"
import { useLocation } from "@reach/router"
import { WindowLocation } from "@reach/router"

const currentTab = (location: WindowLocation<unknown>, path: string) => {
  if (location.pathname === path) {
    return { color: "green" }
  } else {
    return { color: "red" }
  }
}

const Navbar: React.FC = ({}) => {
  const location = useLocation()

  return (
    <div tw="sticky top-0 w-full min-height[10vh] background-color[#171717] flex-1 md:(flex-row gap-4) flex-col items-center justify-center ">
      {NavItemsData.map((item, index) => (
        <nav
          key={index}
          tw="flex-initial absolute md:relative justify-center px-3 text-white"
        >
          <Link
            to={item.link}
            // css={[location.pathname]}

            style={currentTab(location, `${item.link}`)}
            tw="p-3 rounded-3xl md:hover:(text-black bg-white transition-delay[0.1s]  transition-duration[0.5s])"
          >
            {item.name}
          </Link>
        </nav>
      ))}
      <div tw="text-white text-2xl"> data is klljkl {location.pathname}</div>
    </div>
  )
}

export default Navbar
