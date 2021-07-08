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
    <div
      tw="bg-redprimary min-height[60vh] flex flex-col items-center justify-center"
      id="skills"
    >
      <div tw="md:(pt-28) px-5 pt-20 space-y-4 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-white md:text-4xl text-3xl">
          SKILLS & EXPERTISE
        </div>
        <div tw="text-gray-400 italic">
          A winner is someone who recognizes his God-given talents, works his
          tail off to develop them into skills, and uses these skills to
          accomplish his goals.
        </div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="w-full grid lg:grid-cols-6 md:(grid-cols-3 gap-32) sm:(grid-cols-2 gap-24 px-20 py-10) justify-items-center gap-14 text-center items-center py-10">
        {SkillData.map((item, index) => (
          <div
            key={index}
            tw="lg:(max-height[7vh] max-width[7vw]) sm:(max-height[15vh] max-width[15vw]) max-height[30vh] max-width[30vw] p-0"
          >
            <Rotate>
              <CircularProgressbar
                value={item.percent}
                text={`${item.percent}%`}
                background={true}
                styles={buildStyles({
                  pathColor: `rgba(57, 240, 163, ${item.percent / 100})`,
                  textColor: "white",
                  trailColor: "black",
                  backgroundColor: "black",
                })}
              ></CircularProgressbar>
            </Rotate>
            <div tw="grid py-2 whitespace-nowrap text-center text-white">
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

export default SkillSection
