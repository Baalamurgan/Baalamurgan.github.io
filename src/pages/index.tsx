import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Element } from "react-scroll"
import "twin.macro"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import HomePageSection from "../components/Sections/HomePageSection"
import ProfileSection from "../components/Sections/ProfileSection"

const Index: React.FC = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Element name="Home" className="element">
        <HomePageSection />
      </Element>
      <Navbar></Navbar>
      <Element name="Profile" className="element">
        <ProfileSection />
      </Element>

      <Footer />
      {/* <p tw="text-center text-2xl font-bold" > Edit page on src\pages\index.tsx </p> */}
    </Layout>
  )
}

export default Index
