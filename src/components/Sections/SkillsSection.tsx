import React from "react"
import "twin.macro"
import AccoladeSection from "./SkillsSection/AccoladeSection"
import KnowledgeSection from "./SkillsSection/KnowledgeSection"
import MilestoneSection from "./SkillsSection/MilestoneSection"
import SkillSection from "./SkillsSection/SkillSection"
import WorkprocessSection from "./SkillsSection/Workprocess"

const SkillsSection = () => {
  return (
    <div tw="min-h-full bg-gradient-to-b from-green-500 via-green-300 to-yellow-500 ">
      <SkillSection />
      <KnowledgeSection />
    </div>
  )
}

export default SkillsSection
