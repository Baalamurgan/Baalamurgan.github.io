import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Element } from "react-scroll"
import "twin.macro"
import HomePageSection from "../components/Sections/HomePageSection"

const BlogIndex: React.FC = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Element name="Home" className="element">
        <HomePageSection />
      </Element>
      {/* <p tw="text-center text-2xl font-bold" > Edit page on src\pages\index.tsx </p> */}
    </Layout>
  )
}

export default BlogIndex
