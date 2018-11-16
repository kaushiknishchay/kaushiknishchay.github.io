import React from 'react';
import Loadable from 'react-loadable';
import experiencesList from '../constants/experiences';
import Loading from '../Loading';


const Timeline = Loadable({
  loader: () => import(/* webpackChunkName: "Timeline" */ '../components/Timeline'),
  loading: Loading,
});

const ExperienceSection = () => (
  <section id="experiences" className="light--content">
    <h3 className="content--title">
        Experiences
    </h3>
    <Timeline data={experiencesList} />
    <br />
    <br />
  </section>
);

export default ExperienceSection;
