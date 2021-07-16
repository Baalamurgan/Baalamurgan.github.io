import React from "react"
import "twin.macro"
import { ServicesData } from "../../data/ServicesData"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"

const ServicesSection = () => {
  return (
    <div tw="bg-primary min-h-screen flex flex-col items-center" id="services">
      <div tw="md:(pt-28) px-5 pt-20 space-y-6 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-black px-8 md:text-4xl text-3xl">
          WHAT I'M DOING
        </div>
        <div tw="text-center text-black px-8">"What you do"</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[60vw] min-height[3px] min-width[60vw] background-color[chartreuse]"></div>
        </Zoom>
      </div>
      <div tw="py-10 px-5 max-w-6xl text-black p-8 text-left grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {ServicesData.map((item, index) => (
          <div
            key={index}
            tw="space-y-4 p-5 odd:(bg-black) odd:hover:bg-gray-700 even:background-color[#0D0C0D] even:hover:bg-gray-700"
          >
            <Bounce cascade>
              <div tw="color[aqua] font-bold text-2xl">
                <item.icon />
              </div>
              <div tw="flex">
                {index + 1}. {item.name}
              </div>
              <div tw="md:(max-height[4px] max-width[30px] min-height[4px] min-width[30px]) max-height[3px] max-width[20px] min-height[3px] min-width[20px] background-color[chartreuse]"></div>
              <div tw="flex justify-center">{item.description}</div>
            </Bounce>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
