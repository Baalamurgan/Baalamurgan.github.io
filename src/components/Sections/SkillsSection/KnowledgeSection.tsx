import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import LightSpeed from "react-reveal/LightSpeed"
import { KnowledgeData } from "../../../data/KnowledgeData"
import { ProgressBarLine } from "react-progressbar-line"

const KnowledgeSection = () => {
  return (
    <div tw="min-height[60vh] items-center justify-center md:pb-20">
      <div tw="md:(pt-10 px-40) px-5 pt-10 space-y-6 text-center items-center ">
        <div tw="text-black md:text-4xl text-3xl">KNOWLEDGE</div>
        <div tw="text-white italic">"Knowledge description"</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="grid sm:grid-cols-2 justify-items-center gap-0 pl-0 md:(w-full gap-14) text-center items-center py-10">
        {KnowledgeData.map((item, index) => (
          <div key={index} tw="grid justify-items-center text-center p-0">
            <div tw="py-2 whitespace-nowrap text-center text-black lg:text-2xl">
              <Flip left cascade>
                {item.name}
              </Flip>
            </div>
            <LightSpeed left>
              <div tw="width[25vw] height[6vh] text-center justify-items-center">
                <ProgressBarLine
                  value={item.percent}
                  min={0}
                  max={100}
                  strokeWidth={10}
                  trailWidth={5}
                  styles={{
                    length: 100,
                    path: {
                      stroke: "white",
                    },
                    trail: {
                      stroke: "black",
                    },
                    text: {
                      fill: "white",
                      textAlign: "center",
                    },
                  }}
                />
              </div>
            </LightSpeed>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KnowledgeSection
