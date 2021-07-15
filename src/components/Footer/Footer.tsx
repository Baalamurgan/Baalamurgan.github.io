import React from "react"
import "twin.macro"
import tw, { styled } from "twin.macro"
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
                <li
                  style={{
                    color: item.hoverstyle,
                  }}
                  tw="inline-block transition-duration[0.15s] transition-timing-function[linear] lg:text-3xl bg-white hover:(bg-black border-2 border-white box-shadow[inset 0 0 10px white] border-solid rounded-full text-5xl p-5) p-3 m-2 rounded"
                >
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
