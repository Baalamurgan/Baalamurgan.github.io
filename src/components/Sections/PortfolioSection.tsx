import React from "react"
import "twin.macro"

const PortfolioSection = () => {
  return (
    <div tw="bg-redprimary" id="portfolio">
      <div tw="md:(pt-28 px-40) px-5 pt-20 space-y-6 text-center items-center ">
        <div tw="text-white md:text-4xl text-3xl">MY LATEST WORK</div>
        <div tw="text-gray-400">
          I'm looking to expand my portfolio while I'm on top and while I'm
          young.
        </div>
        <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[aqua]"></div>
      </div>
      <div tw="m-0 p-0 w-full grid md:(grid-cols-4 m-0 p-0) grid-cols-1 sm:(grid-cols-2 m-0 p-0) ">
        <div tw="w-full p-0 m-0">
          <img
            tw="object-cover w-full hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>{" "}
        <div tw="w-full object-contain p-0 m-0 hover:(opacity-50 transition-timing-function[linear] transition-duration[0.2s])">
          <img
            tw="object-cover w-full"
            src="https://fakeimg.pl/300x230/"
            alt="projectIcon"
          />
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
