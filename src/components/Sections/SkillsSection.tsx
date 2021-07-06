import React from "react"
import "twin.macro"

const SkillsSection = () => {
  return (
    <div tw="bg-redprimary min-h-screen flex flex-col items-center" id="skills">
      <div tw="md:(pt-28) px-5 pt-20 space-y-4 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-white md:text-4xl text-3xl">
          SKILLS & EXPERTISE
        </div>
        <div tw="text-center text-gray-400 italic">
          A winner is someone who recognizes his God-given talents, works his
          tail off to develop them into skills, and uses these skills to
          accomplish his goals.
        </div>
        <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[aqua]"></div>
      </div>
      <div>hi</div>
    </div>
  )
}

export default SkillsSection
