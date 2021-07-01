import React from "react"
import "twin.macro"
import { ResumeEducationData } from "../../data/ResumeData"
import { ResumeWorkData } from "../../data/ResumeData"

const ResumeSection = () => {
  return (
    <div tw="bg-redprimary min-h-screen flex flex-col items-center" id="resume">
      <div tw="md:(pt-28) px-5 pt-20 space-y-6 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-white md:text-4xl text-3xl">
          MY RESUME
        </div>
        <div tw="text-center text-white">
          If you call failures experiments, you can put them in your resume and
          claim them as achievements.
        </div>
        <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[60vw] min-height[3px] min-width[60vw] background-color[aqua]"></div>
      </div>
      <div tw="max-w-2xl px-10 xl:(max-w-full px-72 py-5) sm:p-10  text-white">
        <div tw="text-2xl sm:text-center md:text-left p-4">
          <p>MY EDUCATION</p>
          <p>2003-2012</p>
        </div>
        {ResumeEducationData.map((item, index) => (
          <div
            key={index}
            tw="flex-grow text-center px-5 md:(grid grid-cols-12 gap-5) "
          >
            <div tw="relative top-3 md:hidden">
              <span tw="col-span-3 background-color[#C80A48] height[40px] whitespace-nowrap rounded px-4 py-2 justify-items-center">
                {item.year}
              </span>
            </div>
            <div tw="hidden md:( visible grid col-span-3 background-color[#C80A48] height[40px] width[min-content] whitespace-nowrap rounded px-4 py-2 justify-items-start)">
              {item.year}
            </div>
            <div tw="hidden md:(grid col-span-1 justify-items-start)">
              <button tw="bg-gray-800 px-3 py-2 rounded height[min-content] width[min-content]">
                +
              </button>
            </div>
            <div tw="col-span-8 border-2 border-white mb-5 justify-items-start">
              <div tw="text-left flex flex-col p-4 space-y-3 mt-2">
                <div tw="lg:text-2xl">{item.title}</div>
                <div tw="color[#A1A1A1] text-sm">{item.description}</div>
              </div>
            </div>
          </div>
        ))}

        <div tw="text-2xl sm:text-center md:text-left p-4">
          <p>WORK EXPERIENCE</p>
          <p>2019-NOW</p>
        </div>
        {ResumeWorkData.map((item, index) => (
          <div
            key={index}
            tw="flex-grow text-center px-5 md:(grid grid-cols-12 gap-5) "
          >
            <div tw="relative top-3 md:hidden">
              <span tw="col-span-3 background-color[#C80A48] height[40px] whitespace-nowrap rounded px-4 py-2 justify-items-center">
                {item.year}
              </span>
            </div>
            <div tw="hidden md:( visible grid col-span-3 background-color[#C80A48] height[40px] width[min-content] whitespace-nowrap rounded px-4 py-2 justify-items-start)">
              {item.year}
            </div>
            <div tw="hidden md:(grid col-span-1 justify-items-start)">
              <button tw="bg-gray-800 px-3 py-2 rounded height[min-content] width[min-content]">
                +
              </button>
            </div>
            <div tw="col-span-8 border-2 border-white mb-5 justify-items-start">
              <div tw="text-left flex flex-col p-4 space-y-3 mt-2">
                <div tw="lg:text-2xl">{item.title}</div>
                <div tw="color[#A1A1A1] text-sm">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeSection
