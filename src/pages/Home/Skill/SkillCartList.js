import React from "react";
import SkillCardItem from "./SkillCartItem";
import js from '~/assets/images/javascript.svg'
import html from '~/assets/images/html5.svg'
import react from '~/assets/images/react.svg'
import boostrap from '~/assets/images/boostrap.svg'
import css from '~/assets/images/css3.svg'

const skills = [
    `${js}`,
    `${html}`,
    `${css}`,
    `${react}`,
    `${boostrap}`
];

const SkillCardList = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 z-0 mt-10 lg:mt-20">
      {skills.map((item, index) => (
        <SkillCardItem image={item} key={`skill-${index}`} />
      ))}
    </div>
  );
}

export default SkillCardList;