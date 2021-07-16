import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"
import { ContactData } from "../../data/ContactData"
import Zoom from "react-reveal/Zoom"
import { Link } from "react-scroll"

const AboutSection = () => {
  return (
    <div
      tw="bg-gradient-to-b md:(bg-gradient-to-r from-red-800) from-red-400 shadow-lg to-white pt-5"
      id="about"
    >
      <div tw="grid xl:grid-cols-2">
        <div tw="flex flex-col gap-5 max-w-4xl xl:(pl-52 pt-40 pr-20) lg:min-h-screen sm:(p-20 pb-10) px-5 py-20 ">
          <div tw="text-black md:text-4xl text-3xl">
            HELLO, MY NAME IS Baalamurgan
          </div>
          <div tw="text-black md:text-2xl">
            3rd year CSE student under-graduating B.Tech at VIT Chennai
            University. Highly motivated in developing websites and learning
            further.
          </div>
          <Zoom>
            <div tw="width[10vw] height[0.7vh] background-color[chartreuse]"></div>
          </Zoom>
          <div tw="md:text-2xl">Born in Vellore and brought up in Chennai</div>
          <div tw="grid grid-cols-2 p-1 xl:(p-2 px-16)">
            <div tw="text-black">
              CONTACT DETAILS:
              <div tw="flex flex-col gap-5 md:(gap-3 mt-2) justify-center">
                {ContactData.map((item, index) => (
                  <div tw="flex word-wrap[break-word]" key={index}>
                    <div tw="border-green-100 border-b-2 p-1 border-r-0 border-t-0 border-l-0 border-solid ">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div tw="flex justify-center items-center text-center">
              <Link
                activeClass="active"
                tw="cursor-pointer overflow-x-visible"
                smooth={"easeInOutQuint"}
                to="resume"
              >
                <a
                  href="Resume.pdf"
                  download="Baalamurgan-Resume.pdf"
                  target="_blank"
                >
                  <button tw="md:(text-2xl p-3) cursor-pointer border-none p-2 rounded bg-pink-600 text-black focus:outline-none transition-duration[0.2s] hover:(text-green-400 bg-pink-600 md:bg-black)">
                    Resume
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div tw="xl:(p-10 m-auto grid items-center justify-center) display[none]">
          <StaticImage
            placeholder="blurred"
            src="../../images/portrait.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
