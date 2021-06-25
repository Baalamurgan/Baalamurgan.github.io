import React from "react"
import "twin.macro"
import { ContactData } from "../../data/ContactData"

const ProfileSection = () => {
  return (
    <div tw="bg-redprimary" id="profile">
      <div tw="flex flex-col gap-5 max-w-4xl md:(pl-52 pt-40 pr-20) p-10 min-h-screen">
        <div tw="text-white md:text-4xl text-3xl">HELLO, MY NAME IS BERG!</div>
        <div tw="text-white">
          Nick Berg, 28 years young, born & grew up in Water Seven Island, Grand
          Line. Highly motivated creative developer with international client
          portfolio.
        </div>
        <div tw="md:(max-height[6px] max-width[30px] min-height[6px] min-width[30px]) max-height[3px] max-width[20px] min-height[3px] min-width[20px] background-color[aqua]"></div>
        <div tw="text-gray-400">
          I currently work at Galley-La Company, where I spend most of my time
          crafting and working on awesome projects.
        </div>
        <div tw="text-gray-400">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit is simply
          dummy text of the printing and typesetting industry. Lorem ipsum dolor
          sit amet, consectetuer adipiscing is simply dummy text of the printing
          and typesetting industry ever since the 1500s.
        </div>
        <div tw="grid grid-cols-2 p-2">
          <div tw="text-white">
            CONTACT DETAILS:
            <div tw="flex flex-col md:(gap-3 mt-2) justify-center">
              {ContactData.map((item, index) => (
                <div tw="flex text-gray-400" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div tw="flex justify-center items-center text-center">
            <button tw="md:p-3 p-2 rounded bg-pink-600 text-black hover:(bg-green-500 text-white transition-duration[0.2s])">
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
