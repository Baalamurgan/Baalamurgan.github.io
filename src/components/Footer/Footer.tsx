import React from "react"
import "twin.macro"
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi"
import { ImPinterest2 } from "react-icons/im"
import { FaLinkedin } from "react-icons/fa"
import { BiBasketball } from "react-icons/bi"
import RubberBand from "react-reveal/RubberBand"

const Footer = () => {
  return (
    <section tw="p-10 flex flex-col justify-center items-center bg-black text-gray-700">
      <RubberBand>
        <ul tw="flex flex-wrap  text-black text-2xl">
          <div tw="flex-initial">
            <a href="#">
              <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                <FiFacebook />
              </li>
            </a>
          </div>
          <div tw="flex-initial">
            <a href="#">
              <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                <FiTwitter />
              </li>
            </a>
          </div>
          <div tw="flex-initial">
            <a href="#">
              <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                <FaLinkedin />
              </li>
            </a>
          </div>
          <div tw="flex-initial">
            <a href="#">
              <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                <BiBasketball />
              </li>
            </a>
          </div>
          <div tw="flex-initial">
            <a href="#">
              <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                <FiInstagram />
              </li>
            </a>
          </div>
          <div tw="flex-initial">
            <a href="#">
              <li tw="bg-gray-600 hover:(bg-gray-400) p-3 m-2 rounded inline-block">
                <ImPinterest2 />
              </li>
            </a>
          </div>
        </ul>
      </RubberBand>
      <div tw="flex justify-center content-center m-4 whitespace-nowrap">
        © 2019 Nick Berg. All rights reserved.
      </div>
    </section>
  )
}

export default Footer
