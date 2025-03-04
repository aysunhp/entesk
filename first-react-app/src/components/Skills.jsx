import { GiMuscleUp } from "react-icons/gi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { LuBaby } from "react-icons/lu";

const Skills = (skills) => {
  const skiller = skills.skills;
  return (
    <div className="skills">
      {skiller.map((skill, idx) => (
        <div key={idx} className="skill" style={{ backgroundColor: skill.bgc }}>
          <span>{skill.name}</span>
          {skill.level === "advanced" && <GiMuscleUp />}
          {skill.level === "intermidate" && <BsFillHandThumbsUpFill />}
          {skill.level === "beginner" && <LuBaby />}
          <div className="emoji">{skill.emoji}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
