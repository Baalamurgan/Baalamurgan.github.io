import React from "react"
import "twin.macro"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { ReferencesData } from "../../data/ReferencesData"
import Zoom from "react-reveal/Zoom"

const ReferencesSection = () => {
  return (
    <div
      tw="bg-primary min-h-screen flex flex-col items-center"
      id="references"
    >
      <div tw="md:(pt-28) px-5 pt-20 space-y-4 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-black md:text-4xl text-3xl">
          REFERENCES
        </div>
        <div tw="text-center text-white italic">"References description"</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[chartreuse]"></div>
        </Zoom>
      </div>
      <div tw="hidden md:(grid px-32 mt-10)">
        <Carousel
          thumbWidth={50}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          autoPlay
          showIndicators={false}
          showArrows={false}
          interval={5000}
        >
          {ReferencesData.map(
            ({ photo, alt, company, description, name, role }, index) => (
              <div
                tw="grid grid-cols-3 space-y-2 text-left text-black"
                key={index}
              >
                <img src={photo} alt={alt} width="300" height="230" />
                <div tw="flex flex-col col-span-2 px-10 space-y-3">
                  <div tw="text-2xl">{company}</div>
                  <div tw="max-height[6px] max-width[30px] min-height[6px] min-width[30px] background-color[chartreuse]"></div>
                  <div tw="italic text-2xl">{description}</div>
                  <div tw="italic underline">{name}</div>
                  <div tw="italic text-white">{role}</div>
                </div>
              </div>
            )
          )}
        </Carousel>
      </div>

      {/* mobile */}
      <div tw="md:hidden mt-10">
        <Zoom>
          <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showIndicators={false}
            showArrows={false}
            showThumbs
            showStatus={false}
            interval={10000}
            tw="max-width[300px]"
          >
            {ReferencesData.map(
              ({ photo, alt, company, description, name, role }, index) => (
                <div tw="grid space-y-2 text-center text-black" key={index}>
                  <img src={photo} alt={alt} width="300" height="230" />
                  <div tw="flex flex-col">
                    <div tw="">{company}</div>
                    <Zoom>
                      <div tw="mx-auto max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[chartreuse]"></div>
                    </Zoom>
                    <div tw="italic mx-auto">{description}</div>
                    <div tw="italic underline">{name}</div>
                    <div tw="italic text-white">{role}</div>
                  </div>
                </div>
              )
            )}
          </Carousel>
        </Zoom>
      </div>
    </div>
  )
}

export default ReferencesSection
