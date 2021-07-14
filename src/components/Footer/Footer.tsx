import React from "react"
import "twin.macro"
import RubberBand from "react-reveal/RubberBand"
import { FooterData } from "../../data/Footer"
import { FcCopyright } from "react-icons/fc"

const Footer = () => {
  return (
    <section tw="p-10 max-height[50vh] min-height[50vh] flex flex-col justify-center place-content-center bg-black text-white">
      <RubberBand>
        <ul tw="flex flex-wrap flex-row justify-center items-center text-2xl p-0">
          {FooterData.map((item, index) => (
            <div key={index} tw="flex-initial">
              <a
                href={item.link}
                tw="flex flex-row justify-center place-content-center text-decoration[none] text-black"
              >
                <li tw="bg-red-600 hover:(bg-black text-5xl transition-duration[0.3s]) p-3 m-2 rounded inline-block">
                  <item.icon />
                </li>
              </a>
            </div>
          ))}
        </ul>
      </RubberBand>
      <div tw="flex justify-center content-center pb-5 md:pt-5 whitespace-nowrap">
        <div tw="text-2xl md:px-2 px-1">
          <FcCopyright />
        </div>
        <div>2021 Baalamurgan. All rights reserved.</div>
      </div>
    </section>
  )
}

export default Footer
