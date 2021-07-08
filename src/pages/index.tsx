import React from "react"
import { Element } from "react-scroll"
import "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar/Navbar"
import HomePageSection from "../components/Sections/HomePageSection"
import ProfileSection from "../components/Sections/ProfileSection"
import PortfolioSection from "../components/Sections/PortfolioSection"
import ServicesSection from "../components/Sections/ServicesSection"
import ResumeSection from "../components/Sections/ResumeSection"
import ReferencesSection from "../components/Sections/ReferencesSection"
import SkillsSection from "../components/Sections/SkillsSection"
import ContactSection from "../components/Sections/ContactSection"
import Footer from "../components/Footer/Footer"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Element name="home" className="element">
        <HomePageSection />
      </Element>
      <Navbar />
      <Element name="profile" className="element">
        <ProfileSection />
      </Element>
      <Element name="portfolio" className="element">
        <PortfolioSection />
      </Element>
      <Element name="services" className="element">
        <ServicesSection />
      </Element>
      <Element name="resume" className="element">
        <ResumeSection />
      </Element>
      <Element name="references" className="element">
        <ReferencesSection />
      </Element>
      <Element name="skills" className="element">
        <SkillsSection />
      </Element>
      <Element name="contact" className="element">
        <ContactSection />
      </Element>
      <Footer />
    </Layout>
  )
}

export default Index
