import React from "react"
import "twin.macro"

const HomePageSection = () => {
  return (
    <div tw="bg-black min-height[90vh] flex flex-col items-center justify-center">
      <div tw="max-w-7xl flex flex-col items-center space-y-5 p-5">
        <div tw="md:(text-6xl font-bold) text-3xl text-center text-white">
          I'M NICK BERG
        </div>
        <div tw="md:text-5xl text-2xl text-center text-white">
          Graphic Designer
        </div>
        <div tw="md:text-2xl text-center text-white">
          28 years young, husband and father, pet lover, coffee addict..
        </div>
        <div tw="flex"></div>
        <button tw="background-color[#C80A48] rounded hover:(bg-green-700 text-white) cursor-pointer md:(text-lg max-width[204px] py-4 w-full) max-width[150px] text-xs py-3 w-full text-white font-bold">
          KNOW ME BETTER
        </button>
      </div>
    </div>
  )
}

export default HomePageSection
