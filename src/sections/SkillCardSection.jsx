import React from 'react';
import Loadable from 'react-loadable';
import Skills from '../constants/skills';
import Loading from '../Loading';


const SkillBar = Loadable({
  loader: () => import(/* webpackChunkName: "SkillCard" */ '../components/SkillCard'),
  loading: Loading,
});

const { frontEndSkills, backEndSkills, programmingSkills } = Skills;

const SkillCardSection = () => (
  <section id="skills" className="dark--content">
    <h3 className="content--title">
      Skills
    </h3>

    <div className="content--body skill-part">
      <div className="item">
        <h2 className="heading">
          Frontend
        </h2>
        <br />
        <div className="row">
          {frontEndSkills.map(({ name, percent, color }) => (
            <SkillBar
              key={name}
              percent={percent}
              name={name}
              color={color}
            />
          ))}
        </div>
      </div>
      <div className="item">
        <h2 className="heading">
          Backend
        </h2>
        <br />
        <div className="row">
          {backEndSkills.map(({ name, percent, color }) => (
            <SkillBar
              key={name}
              percent={percent}
              name={name}
              color={color}
            />
          ))}
        </div>
      </div>
      <div className="item">
        <h2 className="heading">
          Programming / Mobile
        </h2>
        <br />
        <div className="row">
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
    </div>
    <br />
    <br />
  </section>
);


export default SkillCardSection;
