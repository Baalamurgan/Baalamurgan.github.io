import { Link } from "gatsby"
import React, { useEffect } from "react"

import { NavItemsData } from "../../data/NavItemsData"
import { useLocation } from "@reach/router"
import tw from "twin.macro"

const Navbar: React.FC = () => {
  const locationHis = useLocation()

  return (
    <div tw="sticky top-0 w-full min-height[10vh] background-color[#171717] flex  md:(flex-row gap-4) flex-col items-center justify-center p-5">
      {NavItemsData.map((item, index) => (
        <div
          key={index}
          tw="flex-initial absolute md:relative justify-center px-3 text-white"
        >
          <Link to={item.link}>
            <p
              css={[
                locationHis.hash === item.link
                  ? tw`text-green-400`
                  : tw`text-red-400`,
              ]}
              tw="p-3 rounded-3xl  md:hover:(text-black bg-white transition-delay[0.1s]  transition-duration[0.5s])"
            >
              {item.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Navbar
