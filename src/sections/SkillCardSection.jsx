import React from 'react';
import Skills from '../constants/skills';
import Loading from '../Loading';


const SkillCard = React.lazy(() => import(/* webpackChunkName: "SkillCard" */ '../components/SkillCard'));

const {
  frontEndSkills, backEndSkills, programmingSkills, mobileSkills,
} = Skills;

const SkillCardSection = () => (
  <section id="skills" className="light--content" aria-label="Technial Skills section">
    <h3 className="content--title">Skills</h3>

    <div className="content--body skill-part">
      <div className="item">
        <h2 className="heading">Frontend & Backend</h2>
        <br />
        <div className="row">
          {frontEndSkills.map(({
            name, percent, color, type,
          }) => (
            <React.Suspense fallback={<Loading />}>
              <SkillCard
                type={type}
                key={name}
                percent={percent}
                name={name}
                color={color}
              />
            </React.Suspense>
          ))}
          {backEndSkills.map(({
            name, percent, color, type,
          }) => (
            <React.Suspense fallback={<Loading />}>
              <SkillCard
                type={type}
                key={name}
                percent={percent}
                name={name}
                color={color}
              />
            </React.Suspense>
          ))}
        </div>
      </div>
      <div className="item">
        <h2 className="heading">


          Programming
        </h2>
        <br />
        <div className="row">
          {programmingSkills.map(({
            name, percent, color, type,
          }) => (
            <React.Suspense fallback={<Loading />}>
              <SkillCard
                type={type}
                key={name}
                percent={percent}
                name={name}
                color={color}
              />
            </React.Suspense>
          ))}
        </div>
      </div>
      <div className="item">
        <h2 className="heading">


          Mobile
        </h2>
        <br />
        <div className="row">
          {mobileSkills.map(({
            name, percent, color, type,
          }) => (
            <React.Suspense fallback={<Loading />}>
              <SkillCard
                type={type}
                key={name}
                percent={percent}
                name={name}
                color={color}
              />
            </React.Suspense>
          ))}
        </div>
      </div>
    </div>
    <br />
    <br />
  </section>
);


export default SkillCardSection;
