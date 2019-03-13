import React from 'react';
import SkillBar from '../components/SkillBar';
import Skills from '../constants/skills';


const { frontEndSkills, backEndSkills, programmingSkills } = Skills;

const SkillBarSection = () => (
  <section id="skills" className="dark--content">
    <h3 className="content--title">

      Skills
    </h3>

    <div className="content--body">
      <div className="col">
        <h2>

          Frontend
        </h2>
        <br />
        {frontEndSkills.map(({ name, percent, color }) => (
          <SkillBar
            key={name}
            percent={percent}
            name={name}
            color={color}
          />
        ))}
      </div>
      <div className="col">
        <h2>

          Backend
        </h2>
        <br />
        {backEndSkills.map(({ name, percent, color }) => (
          <SkillBar
            key={name}
            percent={percent}
            name={name}
            color={color}
          />
        ))}
      </div>
      <div className="col">
        <h2>

          Programming / Mobile
        </h2>
        <br />
        {programmingSkills.map(({ name, percent, color }) => (
          <SkillBar
            key={name}
            percent={percent}
            name={name}
            color={color}
          />
        ))}
      </div>
    </div>
    <br />
    <br />
  </section>
);


export default SkillBarSection;
