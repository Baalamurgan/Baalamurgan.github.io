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
    <div
      tw="bg-black lg:min-height[100vh] flex flex-col justify-center items-center"
      id="project"
    >
      <div tw="md:(pt-28 px-40 bg-gradient-to-b from-black) px-5 pt-20 bg-gradient-to-b from-white w-full space-y-6 text-center items-center">
        <div tw="text-white md:text-4xl text-3xl">MY LATEST WORK</div>
        <div tw="text-white">More yet to come😉</div>
        <Zoom>
          <div tw="mx-auto width[10vw] height[0.8vh] background-color[chartreuse]"></div>
        </Zoom>
      </div>
      <div tw="self-center place-content-center w-full md:(grid grid-flow-col)">
        {data.allPortfolioJson.nodes.map((item, index) => {
          const image = getImage(item.images)
          return (
            <div className="group" key={index} tw="relative w-full h-auto">
              <Zoom tw="w-full h-auto">
                <div tw="object-cover w-full h-auto transition-timing-function[linear] transition-duration[0.2s]">
                  <GatsbyImage image={image as IGatsbyImageData} alt="photo" />
                  <div tw="absolute place-content-center w-full text-center transition-property[opacity] duration-300 h-full top-0 bg-black bg-opacity-70 opacity-0 hidden group-hover:(opacity-100 grid)">
                    <div tw="place-self-center">
                      <Fade right>
                        <a
                          href={item.codelink}
                          target="_blank"
                          rel="noopener"
                          tw="text-decoration[none] bg-white text-gray-600 border-4 border-solid border-gray-400 font-bold p-2 rounded hover:(border-gray-600 text-gray-400)"
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
                          rel="noopener"
                          tw="text-decoration[none] bg-white text-pink-600 border-4 border-solid border-pink-400 font-bold p-2 rounded hover:(border-pink-600 text-pink-400)"
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
                  <div tw="md:hidden text-center bg-white col-span-2 mb-2 place-self-center text-black">
                    <Bounce>
                      <div>{item.title}</div>
                    </Bounce>
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
