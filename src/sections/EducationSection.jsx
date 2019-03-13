import React from 'react';
import Loadable from 'react-loadable';
import educationList from '../constants/education';
import Loading from '../Loading';


const Timeline = Loadable({
  loader: () => import(/* webpackChunkName: "Timeline" */ '../components/Timeline'),
  loading: Loading,
});

const EducationSection = () => (
  <section id="education" className="light--content" aria-label="Education qualification section">
    <h3 className="content--title">

      Education
    </h3>
    <Timeline data={educationList} />
    <br />
    <br />
  </section>
);


export default EducationSection;
