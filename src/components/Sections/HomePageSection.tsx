import { Link } from "react-scroll"
import React from "react"
import "twin.macro"

const HomePageSection = () => {
  return (
    <div
      id="home"
      tw="bg-black lg:min-height[90vh] min-height[100vh] flex flex-col items-center justify-center"
    >
      <div tw="max-w-7xl flex flex-col items-center space-y-5 p-5">
        <div tw="md:(text-6xl font-bold) text-3xl text-center text-white">
          Name of Client
        </div>
        <div tw="md:text-5xl text-2xl text-center text-white">Role</div>
        <div tw="md:text-2xl text-center text-white">Description</div>
        <div tw="flex"></div>
        <Link
          activeClass="active"
          tw="cursor-pointer text-center overflow-x-visible background-color[rgb(200, 10, 72)] rounded hover:(background-color[rgb(200, 10, 72)] md:bg-green-700 text-white) md:(text-lg max-width[204px] py-4 w-full) max-width[150px] py-3 w-full text-white font-bold"
          smooth={"easeInOutQuint"}
          to="profile"
        >
          <button tw="border-none focus:outline-none">KNOW ME BETTER</button>
        </Link>
      </div>
    </div>
  )
}

export default HomePageSection
