import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import Rotate from "react-reveal/Rotate"
import { SkillData } from "../../data/SkillData"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const SkillSection = () => {
  return (
    <div tw="lg:min-height[100vh] bg-black flex md:(min-height[100vh] flex-row) lg:(flex-col justify-center) flex-col content-center items-center">
      <div tw="md:(pt-0) lg:pt-20 px-5 pt-20 space-y-4 text-center max-w-2xl">
        <div tw="mx-auto text-center text-white md:text-4xl text-3xl">
          SKILLS & EXPERTISE
        </div>
        <div tw="text-white italic">On progress</div>
        <Zoom>
          <div tw="mx-auto width[10vw] height[0.7vh]background-color[chartreuse]"></div>
        </Zoom>
      </div>
      <div tw="self-center lg:max-w-7xl w-full grid lg:(grid-cols-6 gap-x-2) md:(grid-cols-3 gap-5 pr-5) sm:(grid-cols-2 gap-5) gap-3 justify-items-center py-10">
        {SkillData.map((item, index) => (
          <div
            key={index}
            className="group"
            tw="mx-auto flex flex-col items-center"
          >
            <div tw="z-40 p-0 group-hover:(animate-bounce) width[40vw] lg:width[10vw] md:width[10vw] sm:width[15vw]">
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
                <div tw="z-50 group-hover:(color[yellow]) py-2 text-center word-wrap[break-word] text-2xl text-white">
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
