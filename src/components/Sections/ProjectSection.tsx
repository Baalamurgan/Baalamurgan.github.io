import React from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import { graphql, useStaticQuery } from "gatsby"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image"

type dataType = {
  allPortfolioJson: {
    nodes: {
      title: string
      images: ImageDataLike
      demolink: string
      codelink: string
    }[]
  }
}
const ProjectSection = () => {
  const data: dataType = useStaticQuery(graphql`
    query MyQuery {
      allPortfolioJson {
        nodes {
          images {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          title
          demolink
          codelink
        }
      }
    }
  `)

  return (
    <div tw="bg-black lg:min-h-screen" id="project">
      <div tw="md:(pt-28 px-40) px-5 pt-20 space-y-6 text-center items-center">
        <div tw="text-black md:text-4xl text-3xl">MY LATEST WORK</div>
        <div tw="text-white">"Explanation about your latest works"</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[40px] min-height[3px] min-width[40px] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw=" w-full grid grid-flow-col">
        {data.allPortfolioJson.nodes.map((item, index) => {
          const image = getImage(item.images)
          return (
            <div className="group" key={index} tw="relative w-full h-auto">
              <Zoom tw="w-full h-auto">
                <div tw="object-cover w-full h-auto hover:(transition-timing-function[linear] transition-duration[0.2s])">
                  <GatsbyImage image={image as IGatsbyImageData} alt="photo" />
                  <div tw="absolute place-content-center w-full text-center transition-opacity duration-300 h-full top-0 bg-black bg-opacity-70 opacity-0 hidden group-hover:(opacity-100 grid)">
                    <div tw="place-self-center">
                      <Fade right>
                        <a
                          href={item.codelink}
                          target="_blank"
                          tw="text-decoration[none] bg-gray-700 text-white font-bold p-2 rounded-full"
                        >
                          Code
                        </a>
                      </Fade>
                    </div>
                    <div>
                      <Fade left>
                        <a
                          href={item.demolink}
                          target="_blank"
                          tw="text-decoration[none] bg-pink-600 text-white font-bold p-2 rounded-full"
                        >
                          Demo
                        </a>
                      </Fade>
                    </div>
                    <div tw="col-span-2 py-2 place-self-center text-white">
                      <Bounce>
                        <div>{item.title}</div>
                      </Bounce>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectSection
