import React from "react"
import "twin.macro"
import RubberBand from "react-reveal/RubberBand"
import { FooterData } from "../../data/Footer"

const Footer = () => {
  return (
    <section tw="p-10 max-height[50vh] min-height[50vh] flex flex-col justify-center place-content-center bg-black text-gray-700">
      <RubberBand>
        <ul tw="flex flex-wrap flex-row justify-center items-center text-2xl p-0">
          {FooterData.map((item, index) => (
            <div key={index} tw="flex-initial">
              <a
                href={item.link}
                tw="flex flex-row justify-center place-content-center text-decoration[none] text-black"
              >
                <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                  <item.icon />
                </li>
              </a>
            </div>
          ))}
        </ul>
      </RubberBand>
      <div tw="flex justify-center content-center pb-5 whitespace-nowrap">
        © "Year" "Name". All rights reserved.
      </div>
    </section>
  )
}

export default Footer
