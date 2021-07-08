import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import Rotate from "react-reveal/Rotate"
import { MilestoneData } from "../../../data/MilestoneData"
import { ProgressBarLine } from "react-progressbar-line"

const MilestoneSection = () => {
  return (
    <div
      tw="bg-redprimary min-height[60vh] sm:(flex flex-col) items-center justify-center pb-32"
      id="knowledge"
    >
      <div tw="md:(pt-20 px-40) px-5 pt-10 space-y-6 text-center items-center ">
        <div tw="text-white md:text-4xl text-3xl">MILESTONES ACHIEVED</div>
        <div tw="text-gray-400 italic">
          My path has not been determined. I shall have more experiences and
          pass many more milestones.
        </div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="w-full grid gap-x-8 gap-y-20 grid-cols-2 sm:grid-cols-4 justify-items-center text-center items-center py-10 lg:px-32">
        {MilestoneData.map((item, index) => (
          <div
            key={index}
            tw="col-span-1 flex flex-col justify-center sm:(flex flex-wrap flex-row) text-center text-white lg:(max-height[7vh] max-width[7vw]) sm:(max-height[15vh] max-width[15vw]) max-height[30vh] max-width[30vw] whitespace-nowrap p-0"
          >
            <div tw="text-7xl sm:col-span-2 col-span-2 width[min-content] height[min-content] p-5 rounded-full bg-pink-600 ">
              <Rotate>
                <item.icon />
              </Rotate>
            </div>
            <div tw="text-2xl sm:text-3xl py-2 ">
              <Flip left cascade>
                {item.value}
              </Flip>
            </div>
            <div tw="text-sm">
              <Flip left cascade>
                {item.name}
              </Flip>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MilestoneSection
