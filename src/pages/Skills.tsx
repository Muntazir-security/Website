
import React from "react";
import PageBackground from "@/components/shared/PageBackground";
import CyberSkillTree from "@/components/skills/CyberSkillTree";

const Skills = () => {
  return (
    <PageBackground>
      <div className="pt-24 pb-16">
        <CyberSkillTree />
      </div>
    </PageBackground>
  );
};

export default Skills;
