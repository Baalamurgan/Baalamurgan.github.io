import React from "react"
import AccoladeSection from "./SkillsSection/AccoladeSection"
import KnowledgeSection from "./SkillsSection/KnowledgeSection"
import MilestoneSection from "./SkillsSection/MilestoneSection"
import SkillSection from "./SkillsSection/SkillSection"

const SkillsSection = () => {
  return (
    <div>
      <SkillSection />
      <KnowledgeSection />
      <AccoladeSection />
      <MilestoneSection />
    </div>
  )
}

export default SkillsSection
