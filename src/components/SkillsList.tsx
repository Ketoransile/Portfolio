import Image from "next/image";
import { SkillCard } from "./SkillCard";
export const SkillsList = ({ skills }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {skills.map((skill, id) => (
        <SkillCard skill={skill} key={id} />
      ))}
    </div>
  );
};
