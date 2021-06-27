import { Link } from "react-scroll"
import React, { useState } from "react"
import { NavItemsData } from "../../data/NavItemsData"
import { useLocation } from "@reach/router"
import tw, { styled } from "twin.macro"
import { FiMenu } from "react-icons/fi"
import { FaRegWindowClose } from "react-icons/fa"

const Active = styled(Link)`
  ${tw`active:(text-black bg-white)`}
`
const MobActive = styled(Link)`
  ${tw`active:(text-white bg-black)`}
`

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false)
  const onclick = () => setMenu(!menu)
  const locationHistory = useLocation()
  return (
    <div tw="sticky top-0 z-50">
      <div tw="hidden lg:(w-full min-height[10vh] background-color[#171717] flex flex-row gap-4 items-center justify-center p-5)">
        {NavItemsData.map((item, index) => (
          <div
            key={index}
            tw="flex-initial absolute md:relative justify-center px-3 text-white"
          >
            <Active
              activeClass="active"
              tw=" active:bg-white cursor-pointer"
              smooth={"easeInOutQuint"}
              to={item.link}
            >
              <p
                css={[
                  locationHistory.hash === item.link
                    ? tw`text-green-400`
                    : tw`text-red-400`,
                ]}
                tw="p-3 rounded-3xl hover:(text-indigo-700 bg-black transition-delay[0.1s]  transition-duration[0.5s]) md:hover:(text-black bg-white transition-delay[0.1s]  transition-duration[0.5s])"
              >
                {item.name}
              </p>
            </Active>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div tw="lg:hidden flex fixed top-0 w-full py-3 px-4 min-height[10vh] justify-end text-white bg-black">
        <div tw="z-20 flex items-center text-center justify-center">
          <button onClick={onclick} tw="lg:hidden">
            <div tw="text-white ">
              {!menu ? <FiMenu /> : <FaRegWindowClose />}
            </div>
          </button>
        </div>
        <div
          tw="fixed"
          css={[
            menu
              ? tw`z-10 fixed translate-y-20 transition-duration[0.5s] text-center bg-black w-full flex flex-col space-y-2 p-2 right-0`
              : tw`-right-full`,
          ]}
        >
          {NavItemsData.map((item, index) => (
            <div key={index} tw="">
              <MobActive
                activeClass="active"
                onClick={onclick}
                tw=" active:bg-black cursor-pointer"
                smooth={"easeInOutQuint"}
                to={item.link}
              >
                <p>{item.name}</p>
              </MobActive>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
