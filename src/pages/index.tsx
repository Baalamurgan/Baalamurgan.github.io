import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Element } from "react-scroll"
import "twin.macro"
import Navbar from "../components/Navbar/Navbar"
import HomePageSection from "../components/Sections/HomePageSection"
import ProfileSection from "../components/Sections/ProfileSection"
import PortfolioSection from "../components/Sections/PortfolioSection"
import ServicesSection from "../components/Sections/ServicesSection"
import ResumeSection from "../components/Sections/ResumeSection"

const Index: React.FC = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Element name="Home" className="element">
        <HomePageSection />
      </Element>
      <Navbar />
      <Element name="Profile" className="element">
        <ProfileSection />
      </Element>
      <Element name="Portfolio" className="element">
        <PortfolioSection />
      </Element>
      <Element name="Portfolio" className="element">
        <ServicesSection />
      </Element>
      <Element name="Portfolio" className="element">
        <ResumeSection />
      </Element>

      {/* <p tw="text-center text-2xl font-bold" > Edit page on src\pages\index.tsx </p> */}
    </Layout>
  )
}

export default Index
