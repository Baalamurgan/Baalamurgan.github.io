import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"

const ContactSection = () => {
  return (
    <div
      tw="bg-redprimary min-h-screen flex flex-col items-center"
      id="contact"
    >
      <div tw="md:(pt-28) px-5 pt-20 space-y-4 text-center max-w-2xl  items-center">
        <div tw="mx-auto text-center text-white md:text-4xl text-3xl">
          CONTACT ME
        </div>
        <div tw="text-center text-gray-400 italic">
          Have a project you'd like to discuss?
        </div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="grid w-full lg:px-72 md:px-40 sm:px-20 px-4 pt-10 text-gray-400">
        <form>
          <div tw="grid grid-cols-2 gap-4 w-full">
            <div tw="col-span-2 lg:col-span-1">
              <input
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2  transition-duration[0.20s]) py-1 border-gray-400 border-b-2"
                type="text"
                placeholder="Name"
              />
            </div>
            <div tw="col-span-2 lg:col-span-1">
              <input
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2  transition-duration[0.20s]) py-1 border-gray-400 border-b-2"
                type="text"
                placeholder="Email"
              />
            </div>
            <div tw="col-span-2">
              <input
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2  transition-duration[0.20s]) py-1 border-gray-400 border-b-2"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div tw="col-span-2">
              <textarea
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2  transition-duration[0.20s]) py-1 border-gray-400 border-b-2"
                rows={10}
                placeholder="Message"
              />
            </div>
            <div tw="col-span-2 whitespace-nowrap text-sm">
              *PLEASE COMPLETE ALL FIELDS CORRECTLY
            </div>
            <div tw="col-span-2 my-7">
              <a
                tw="cursor-pointer overflow-x-visible"
                href="mailto:someone@example.com"
              >
                <button tw="bg-pink-700 w-full p-4 rounded border-none text-white">
                  SEND MESSAGE
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
