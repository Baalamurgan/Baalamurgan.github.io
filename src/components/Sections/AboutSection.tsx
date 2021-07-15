import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"
import { ContactData } from "../../data/ContactData"
import Zoom from "react-reveal/Zoom"
import { Link } from "react-scroll"

const AboutSection = () => {
  return (
    <div
      tw="md:bg-gradient-to-r bg-gradient-to-b md:from-red-800 from-red-400 shadow-lg to-white pt-5"
      id="about"
    >
      <div tw="grid xl:grid-cols-2">
        <div tw="flex flex-col gap-5 max-w-4xl xl:(pl-52 pt-40 pr-20) sm:(p-20 pb-0) px-10 pt-20 min-h-screen">
          <div tw="text-black md:text-4xl text-3xl">
            HELLO, MY NAME IS Baalamurgan
          </div>
          <div tw="text-black">
            3rd year CSE student under-graduating B.Tech at VIT Chennai
            University. Highly motivated in developing websites and learning
            further.
          </div>
          <Zoom>
            <div tw="md:(max-height[6px] max-width[2vw] min-height[6px] min-width[2vw]) max-height[3px] max-width[60vw] min-height[3px] min-width[60vw] background-color[aqua]"></div>
          </Zoom>
          <div>Born in Vellore and brought up in Chennai</div>
          <div tw="grid grid-cols-2 p-1 xl:(p-2 px-16)">
            <div tw="text-black">
              CONTACT DETAILS:
              <div tw="flex flex-col md:(gap-3 mt-2) justify-center">
                {ContactData.map((item, index) => (
                  <div tw="flex" key={index}>
                    {item}
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
                  <button tw="cursor-pointer md:p-3 border-none p-2 rounded bg-pink-600 text-black focus:outline-none hover:(bg-pink-600 md:bg-green-500 text-black transition-duration[0.2s])">
                    Resume
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div tw="xl:(p-10 m-auto grid items-center justify-center)  display[none]">
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
