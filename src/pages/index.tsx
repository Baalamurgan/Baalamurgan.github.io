import React from "react"
import "twin.macro"
import { Element } from "react-scroll"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar/Navbar"
import HomePageSection from "../components/Sections/HomePageSection"
import AboutSection from "../components/Sections/AboutSection"
import ProjectSection from "../components/Sections/ProjectSection"
import TimelineSection from "../components/Sections/TimelineSection"
import SkillSection from "../components/Sections/SkillSection"
import ContactSection from "../components/Sections/ContactSection"
import Footer from "../components/Footer/Footer"

const Index = () => {
  return (
    <Layout>
      <Seo title="Baalamurgan" />
      <Element name="home" id="home" className="element">
        <HomePageSection />
      </Element>
      <Navbar />
      <Element name="about" id="about" className="element">
        <AboutSection />
      </Element>
      <Element name="project" id="project" className="element">
        <ProjectSection />
      </Element>
      <Element name="timeline" id="timeline" className="element">
        <TimelineSection />
      </Element>
      <Element name="skills" id="skills" className="element">
        <SkillSection />
      </Element>
      <Element name="contact" id="contact" className="element">
        <ContactSection />
      </Element>
      <Footer />
    </Layout>
  )
}

export default Index
