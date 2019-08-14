import React from 'react';
import experiencesList from '../constants/experiences';
import Loading from '../Loading';


const Timeline = React.lazy(() => import(/* webpackChunkName: "Timeline" */ '../components/Timeline'));

const ExperienceSection = () => (
  <section id="experiences" className="light--content"
           aria-label="Professional Experiences section">
    <h3 className="content--title">Experiences</h3>
    <React.Suspense fallback={<Loading />}>
      <Timeline data={experiencesList} />
    </React.Suspense>
    <br />
    <br />
  </section>
);

export default ExperienceSection;
