import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"
import Roll from "react-reveal/Roll"
import { AccoladeData } from "../../../data/AccoladeData"
import { IoRibbonOutline } from "react-icons/io5"

const AccoladeSection = () => {
  return (
    <div
      tw="bg-primary min-height[60vh] grid sm:(flex flex-col items-center) md:pb-20"
      id="knowledge"
    >
      <div tw="md:(pt-10 px-40) px-5 pt-10 space-y-6 text-center items-center ">
        <div tw="text-black md:text-4xl text-3xl">ACCOLADES</div>
        <div tw="text-white italic">"Accolade description"</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[chartreuse]"></div>
        </Zoom>
      </div>
      {AccoladeData.map((item, index) => (
        <div
          key={index}
          tw="text-left grid px-10 sm:(grid-cols-12 px-20) grid-cols-8 auto-cols-min grid-flow-col gap-10 sm:max-width[min-content] pt-10 text-black"
        >
          <div tw="text-2xl sm:col-span-2 col-span-2 width[min-content] height[min-content] p-3 rounded-3xl bg-pink-600 ">
            <div>
              <Roll>
                <item.icon />
              </Roll>
            </div>
          </div>
          <div tw="sm:col-span-10 col-span-6">
            <Bounce cascade>
              <div tw="sm:whitespace-nowrap">{item.name}</div>
              <div tw="italic sm:(py-2 whitespace-nowrap) text-white text-sm">
                {item.title}
              </div>
              <span tw="hidden sm:(display[inline] whitespace-nowrap)">
                ----------------------------------------------
              </span>
              <span tw="inline whitespace-nowrap sm:hidden ">
                -------------------------------
              </span>
            </Bounce>
          </div>
        </div>
      ))}
      <div tw="grid justify-center text-5xl sm:text-7xl text-black py-10">
        <IoRibbonOutline />
      </div>
    </div>
  )
}

export default AccoladeSection
