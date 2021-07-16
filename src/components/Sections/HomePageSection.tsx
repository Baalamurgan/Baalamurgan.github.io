import { Link } from "react-scroll"
import React from "react"
import "twin.macro"

const HomePageSection = () => {
  return (
    <div
      id="home"
      tw="bg-primary bg-gradient-to-b from-white to-red-400 lg:min-height[92vh] min-height[100vh] flex flex-col items-center justify-center"
    >
      <div tw="max-w-7xl flex flex-col items-center space-y-5 p-5">
        <div tw="md:(text-6xl font-bold) text-3xl text-center text-black">
          Baalamurgan K A
        </div>
        <div tw="md:text-5xl text-2xl text-center text-black">
          Web Developer🤩
        </div>
        <div tw="md:text-2xl text-center text-black">
          3rd year College student, Dog lover
        </div>
        <div tw="flex"></div>
        <Link
          activeClass="active"
          tw="cursor-pointer text-center overflow-x-visible background-color[#EF6C98] rounded hover:(background-color[rgb(200, 10, 72)] md:bg-green-700 text-black) md:(text-lg max-width[204px] py-4 w-full) max-width[150px] py-3 w-full text-black font-bold"
          smooth={"easeInOutQuint"}
          to="about"
        >
          <button tw="cursor-pointer border-none focus:outline-none">
            KNOW ME BETTER
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePageSection
