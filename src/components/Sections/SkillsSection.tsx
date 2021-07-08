import React from "react"
import AccoladeSection from "./SkillsSection/AccoladeSection"
import KnowledgeSection from "./SkillsSection/KnowledgeSection"
import MilestoneSection from "./SkillsSection/MilestoneSection"
import SkillSection from "./SkillsSection/SkillSection"
import WorkprocessSection from "./SkillsSection/Workprocess"

const SkillsSection = () => {
  return (
    <div>
      <SkillSection />
      <KnowledgeSection />
      <AccoladeSection />
      <MilestoneSection />
      <WorkprocessSection />
    </div>
  )
}

export default SkillsSection
