import React from "react"
import "twin.macro"
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi"
import { ImPinterest2 } from "react-icons/im"
import { FaLinkedin } from "react-icons/fa"
import { BiBasketball } from "react-icons/bi"

const Footer = () => {
  return (
    <section tw="max-height[50vh] min-height[50vh] p-10 flex flex-col justify-center content-center bg-black text-gray-700">
      <ul tw="flex flex-wrap justify-center content-around text-black text-2xl">
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
      <div tw="flex justify-center content-center m-4 whitespace-nowrap">
        © 2019 Nick Berg. All rights reserved.
      </div>
    </section>
  )
}

export default Footer
