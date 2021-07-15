import { Link } from "react-scroll"
import React, { useState } from "react"
import { NavItemsData } from "../../data/NavItemsData"
import tw, { styled } from "twin.macro"
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"

const Active = styled(Link)`
  &.active {
    border-bottom: 3px solid white;
    color: chartreuse;
    transition: border-width 1s linear;
  }
  &.active:hover {
    border-bottom: 0px;
    animation: bounce 1s infinite;

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-20%);
        animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(20%);
        animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`
const MobActive = styled(Link)`
  &.active {
    border-bottom: 3px solid white;
    color: chartreuse;
    transition: border-width 1s linear;
  }
`

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false)
  const onclick = () => setMenu(!menu)
  return (
    <div tw="sticky top-0 z-50">
      <div tw="hidden lg:(w-full max-height[8vh] bg-black flex flex-row gap-4 items-center justify-center p-5)">
        {NavItemsData.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            tw="flex-initial absolute md:relative justify-center px-3 text-black md:hover:animate-bounce"
          >
            <Active
              to={item.link}
              activeClass="active"
              spy={true}
              tw="color[aqua] cursor-pointer overflow-x-visible"
              smooth={"easeInOutQuint"}
            >
              <p tw="p-2 rounded-3xl md:inline-flex items-center">
                <div tw="text-2xl pr-1">
                  <item.icon />
                </div>
                {item.name}
              </p>
            </Active>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div tw="lg:hidden flex fixed top-0 w-full py-3 px-4 min-height[10vh] justify-end text-black bg-black">
        <div tw="z-20 flex items-center text-center justify-center">
          <button onClick={onclick} tw="cursor-pointer border-none lg:hidden">
            <div tw="text-3xl" css={!menu ? tw`text-white` : tw`text-black`}>
              {!menu ? <FiMenu /> : <VscChromeClose />}
            </div>
          </button>
        </div>
        <div
          tw="z-10 fixed top-0 opacity-90 transition-duration[0.5s] rounded-b-3xl border-0 items-center text-center bg-primary w-full flex flex-col space-y-2 p-2 "
          css={[menu ? tw`right-0` : tw`-right-full`]}
        >
          {NavItemsData.map((item, index) => (
            <div key={index} tw="max-width[40vw]">
              <MobActive
                activeClass="active"
                onClick={onclick}
                tw="bg-black  cursor-pointer"
                smooth={"easeInOutQuint"}
                to={item.link}
                spy={true}
              >
                <div tw="text-2xl pr-1 hover:(animate-bounce)">
                  <item.icon />
                </div>
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
