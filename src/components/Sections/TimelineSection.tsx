import React, { useState } from "react"
import tw from "twin.macro"
import { TimelineEducationData } from "../../data/TimelineData"
import Bounce from "react-reveal/Bounce"
import Wobble from "react-reveal/Wobble"

const TimelineSection = () => {
  return (
    <div tw="bg-primary min-h-screen flex flex-col items-center">
      <div tw="md:(pt-20) px-5 pt-20 space-y-6 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-black md:text-4xl text-3xl">
          MY RESUME
        </div>
        <div tw="text-center text-black">"Resume description"</div>
        <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[60vw] min-height[3px] min-width[60vw] background-color[aqua]"></div>
      </div>
      <div tw="max-w-2xl xl:(max-w-full px-72 py-5) sm:pt-10  text-black">
        <div tw="text-2xl sm:text-center md:text-left p-4">
          <p>MY EDUCATION</p>
          <p>2015-2023</p>
        </div>
        {TimelineEducationData.map((item, index) => {
          const [view, setView] = useState(index === 0 ? true : false)

          return (
            <div
              key={index}
              tw="flex-grow text-center px-5 md:(grid grid-cols-12 gap-5) "
            >
              <div tw="relative top-3 md:hidden">
                <Wobble>
                  <span tw="col-span-3 background-color[#C80A48] height[40px] whitespace-nowrap rounded px-4 py-2 justify-items-center">
                    {item.year}
                  </span>
                </Wobble>
              </div>
              <div tw="hidden md:( visible grid col-span-3 background-color[#C80A48] height[40px] width[min-content] whitespace-nowrap rounded px-4 py-2 justify-items-start)">
                <Wobble>{item.year}</Wobble>
              </div>
              <div tw="hidden md:(grid col-span-1 justify-items-start)">
                <button
                  onClick={() => setView(!view)}
                  tw="bg-gray-800 text-white px-3 py-2 text-2xl border-none cursor-pointer rounded height[min-content] width[min-content]"
                >
                  {!view ? "+" : "-"}
                </button>
              </div>
              <div tw="col-span-8 border-2 border-solid border-black mb-5 justify-items-start">
                <div tw="text-left flex flex-col p-4 space-y-3 mt-2">
                  <Bounce cascade>
                    <div tw="lg:text-2xl">{item.title}</div>
                    <div
                      css={[view ? tw`` : tw`md:hidden`]}
                      tw="text-sm md:text-3xl"
                    >
                      {item.description}
                    </div>
                  </Bounce>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimelineSection
