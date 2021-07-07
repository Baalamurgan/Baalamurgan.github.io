import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import Rotate from "react-reveal/Rotate"
import { KnowledgeData } from "../../../data/KnowledgeData"
import { ProgressBarLine } from "react-progressbar-line"

const MilestoneSection = () => {
  return (
    <div
      tw="bg-redprimary min-height[70vh] sm:(flex flex-col) items-center justify-center"
      id="knowledge"
    >
      <div tw="md:(pt-28 px-40) px-5 pt-10 space-y-6 text-center items-center ">
        <div tw="text-white md:text-4xl text-3xl">MILESTONES ACHIEVED</div>
        <div tw="text-gray-400 italic">
          My path has not been determined. I shall have more experiences and
          pass many more milestones.
        </div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[aqua]"></div>
        </Zoom>
      </div>
    </div>
  )
}

export default MilestoneSection
