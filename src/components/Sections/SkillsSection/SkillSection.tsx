import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import Rotate from "react-reveal/Rotate"
import { SkillData } from "../../../data/SkillData"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const SkillSection = () => {
  return (
    <div tw="min-height[100vh] bg-gradient-to-b from-green-500 via-green-300 to-yellow-500 flex md:flex-row lg:flex-col flex-col content-center items-center">
      <div tw="md:(pt-0) lg:pt-20 px-5 pt-20 space-y-4 text-center max-w-2xl">
        <div tw="mx-auto text-center text-black md:text-4xl text-3xl">
          SKILLS & EXPERTISE
        </div>
        <div tw="text-white italic">"Skills description"</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="self-center lg:max-w-7xl w-full grid lg:(grid-cols-6 gap-x-2) md:(grid-cols-3 gap-5 pr-5) sm:(grid-cols-2 gap-5) gap-3 justify-items-center py-10">
        {SkillData.map((item, index) => (
          <div key={index} tw="mx-auto flex flex-col items-center">
            <div tw="p-0 width[40vw] lg:width[10vw] md:width[10vw] sm:width[15vw]">
              <Rotate>
                <CircularProgressbar
                  value={item.percent}
                  text={`${item.percent}%`}
                  background={true}
                  styles={buildStyles({
                    pathColor: `rgba(139, 57, 177, ${item.percent / 100})`,
                    textColor: "white",
                    trailColor: "black",
                    backgroundColor: "black",
                  })}
                ></CircularProgressbar>
              </Rotate>
            </div>
            <div>
              <Flip left cascade>
                <div tw="py-2 text-center word-wrap[break-word] text-2xl text-black">
                  {item.name}
                </div>
              </Flip>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSection
