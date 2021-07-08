import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flip from "react-reveal/Flip"
import LightSpeed from "react-reveal/LightSpeed"
import { WorkprocessData } from "../../../data/WorkprocessData"
import { ProgressBarLine } from "react-progressbar-line"

const WorkprocessSection = () => {
  return (
    <div
      tw="bg-redprimary min-height[60vh] items-center justify-center text-white"
      id="knowledge"
    >
      <div tw="md:(pt-10 px-40) px-5 pt-10 space-y-6 text-center items-center ">
        <div tw="text-white md:text-4xl text-3xl">WORK PROCESS</div>
        <div tw="text-gray-400 italic">
          As a human being, I'm work in process.
        </div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="lg:(pt-10 px-40) md:px-20 px-5">
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </div>
        <div tw="my-10 grid md:grid-cols-6 justify-items-center">
          {WorkprocessData.map((item, index) => (
            <div key={index} tw="w-full py-2 md:py-10 even:(md:mt-20)">
              <div tw="z-0">
                <div tw="relative top-7">
                  <hr tw="text-left width[100%] margin-left[0]" />
                </div>
              </div>
              {index % 2 == 0 ? (
                <div tw="relative z-40 px-5 md:(border-l-2 border-r-2 border-dashed border-white)">
                  <div tw="grid justify-items-center text-2xl rounded col-span-2 py-3 bg-pink-600 ">
                    <span>
                      <item.icon />
                    </span>
                  </div>
                  <div tw="text-center md:py-4">
                    {index + 1}. {item.name}
                  </div>
                </div>
              ) : (
                <div tw=" relative z-40 px-5">
                  <div tw="grid justify-items-center text-2xl rounded col-span-2  px-6 py-4 bg-pink-600 ">
                    <span>
                      <item.icon />
                    </span>
                  </div>
                  <div tw="text-center md:py-4">
                    {index + 1}. {item.name}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  )
}

export default WorkprocessSection
