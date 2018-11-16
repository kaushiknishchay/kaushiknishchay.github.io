import React from 'react';
import PropTypes from 'prop-types';
import SkillBar from '../components/SkillBar';


const SkillBarSection = ({ frontEndSkills, backEndSkills, programmingSkills }) => (
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

SkillBarSection.propTypes = {
  frontEndSkills: PropTypes.array.isRequired,
  backEndSkills: PropTypes.array.isRequired,
  programmingSkills: PropTypes.array.isRequired,
};


export default SkillBarSection;
